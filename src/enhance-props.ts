import { propEnhancers, propNames } from './enhancers'
import expandAliases from './expand-aliases'
import * as cache from './cache'
import * as styles from './styles'
import { EnhancerProps, EnhancedProp } from './types/enhancers'

type PreservedProps = Omit<React.ComponentProps<any>, keyof EnhancerProps>

interface EnhancedPropsResult {
  className: string
  enhancedProps: PreservedProps
}

/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(
  rawProps: EnhancerProps & React.ComponentPropsWithoutRef<any>
): EnhancedPropsResult {
  const propsMap = expandAliases(rawProps)

  const style = { ...rawProps.style }
  propsMap.set('style', style)

  const preservedProps: PreservedProps = {}
  let className = rawProps.className || ''

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(propName, propValue)
    if (cachedClassName) {
      className = `${className} ${cachedClassName}`
      continue
    }

    const enhancer = propEnhancers[propName] as
      | ((value: any) => EnhancedProp | null)
      | undefined

    // Skip false boolean enhancers. e.g: `clearfix={false}`
    // Also allows omitting props via overriding with `null` (i.e: neutralising props)
    if (enhancer) {
      if (propValue == null || propValue === false) {
        continue
      }
      if (typeof propValue == 'object') {
        const ns = propNames.includes(propName) ? style : preservedProps
        ns[propName] = propValue
        continue
      }
    } else {
      // Pass through native props. e.g: disabled, value, type
      preservedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue)
    // Allow enhancers to return null for invalid values
    if (newCss) {
      styles.add(newCss.styles)
      cache.set(propName, propValue, newCss.className)
      className = `${className} ${newCss.className}`
    }
  }

  className = className.trim()

  return { className, enhancedProps: preservedProps }
}
