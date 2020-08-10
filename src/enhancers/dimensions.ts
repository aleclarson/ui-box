import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers,  PropAliases } from '../types/enhancers'

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const width = {
  className: 'w',
  cssName: 'width',
  jsName: 'width'
}
const height = {
  className: 'h',
  cssName: 'height',
  jsName: 'height'
}
const minWidth = {
  className: 'min-w',
  cssName: 'min-width',
  jsName: 'minWidth'
}
const minHeight = {
  className: 'min-h',
  cssName: 'min-height',
  jsName: 'minHeight'
}
const maxWidth = {
  className: 'max-w',
  cssName: 'max-width',
  jsName: 'maxWidth'
}
const maxHeight = {
  className: 'max-h',
  cssName: 'max-height',
  jsName: 'maxHeight'
}

export const propEnhancers: PropEnhancers = {
  height: (value: PropEnhancerValueType) => getCss(height, value),
  maxHeight: (value: PropEnhancerValueType) => getCss(maxHeight, value),
  maxWidth: (value: PropEnhancerValueType) => getCss(maxWidth, value),
  minHeight: (value: PropEnhancerValueType) => getCss(minHeight, value),
  minWidth: (value: PropEnhancerValueType) => getCss(minWidth, value),
  width: (value: PropEnhancerValueType) => getCss(width, value)
}
