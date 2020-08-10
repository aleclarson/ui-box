import getCss from '../get-css'
import {
  PropEnhancerValueType,
  PropValidators,
  PropEnhancers,
  PropAliases,
} from '../types/enhancers'

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const transform = {
  className: 'tfrm',
  cssName: 'transform',
  jsName: 'transform',
  complexValue: true,
}
const transformOrigin = {
  className: 'tfrm-orgn',
  cssName: 'transform-origin',
  jsName: 'transformOrigin',
  complexValue: true,
}

export const propEnhancers: PropEnhancers = {
  transform: (value: PropEnhancerValueType) => getCss(transform, value),
  transformOrigin: (value: PropEnhancerValueType) =>
    getCss(transformOrigin, value),
}
