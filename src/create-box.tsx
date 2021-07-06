import * as React from 'react'
import { BoxComponent, BoxProps } from './types/box-types'
import enhanceProps from './enhance-props'
import { extractAnchorProps, getUseSafeHref } from './utils/safeHref'

export const createBox = <T extends React.ElementType = 'div'>(
  displayName: string,
  defaultElement: T = 'div' as T,
  useProps: <E extends React.ElementType>(
    props: Omit<BoxProps<E>, 'is' | 'allowUnsafeHref' | 'children'>
  ) => typeof props = props => props
) => {
  const Box = React.forwardRef(
    <E extends React.ElementType>(
      { is = defaultElement, children, allowUnsafeHref, ...props }: BoxProps<E>,
      ref: React.Ref<Element>
    ) => {
      props = useProps(props)

      // Convert the CSS props to class names (and inject the styles)
      const { className, enhancedProps: parsedProps } = enhanceProps(props)

      parsedProps.className = className

      if (ref) {
        parsedProps.ref = ref
      }

      /**
       * If the user has enabled safe hrefs we want to make sure that the url passed
       * uses a safe protocol and that the other attributes that make the link safe are
       * added to the element
       */
      const safeHrefEnabled =
        (typeof allowUnsafeHref === 'boolean'
          ? !allowUnsafeHref
          : getUseSafeHref()) &&
        is === 'a' &&
        parsedProps.href
      if (safeHrefEnabled) {
        const { safeHref, safeRel } = extractAnchorProps(
          parsedProps.href,
          parsedProps.rel
        )
        parsedProps.href = safeHref
        parsedProps.rel = safeRel
      }

      return React.createElement(is || 'div', parsedProps, children)
    }
  ) as BoxComponent<{}, T>

  Box.displayName = displayName
  return Box
}
