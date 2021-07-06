import * as React from 'react'
import { BoxComponent, BoxProps } from './types/box-types'
import renderBox from './render-box'

export default function createBox<T extends React.ElementType = 'div'>(
  displayName: string,
  defaultElement: T = 'div' as T,
  useProps: <E extends React.ElementType>(
    props: Omit<BoxProps<E>, 'is'>
  ) => typeof props = props => props
) {
  const Box = React.forwardRef(
    <E extends React.ElementType>(
      { is = defaultElement, ...props }: BoxProps<E>,
      ref: React.Ref<Element>
    ) => renderBox(is as E, useProps(props), ref)
  ) as BoxComponent<{}, T>

  Box.displayName = displayName
  return Box
}
