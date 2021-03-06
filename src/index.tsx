import * as cache from './cache'
import * as styles from './styles'

export { default as Box } from './box'
export { default as renderBox } from './render-box'
export { default as splitProps } from './utils/split-props'
export { default as splitBoxProps } from './utils/split-box-props'
export { setClassNamePrefix } from './get-class-name'
export { configureSafeHref } from './utils/safeHref'
export type {
  BoxProps,
  BoxOwnProps,
  EnhancerProps,
  PropsOf,
  BoxComponent,
} from './types/box-types'

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  list,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform,
  propNames,
  propAliases,
  propEnhancers,
} from './enhancers/index'

export const hydrate = cache.hydrate

export function extractStyles() {
  const output = {
    cache: cache.entries(),
    styles: styles.getAll(),
  }
  clearStyles()
  return output
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
