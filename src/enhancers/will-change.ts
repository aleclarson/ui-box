import getCss from '../get-css'
import {
  PropEnhancerValueType,
  PropValidators,
  PropEnhancers,
} from '../types/enhancers'

export const propAliases = {}

export const propValidators: PropValidators = {}

const willChange = {
  className: 'wc',
  cssName: 'will-change',
  jsName: 'willChange',
}

export const propEnhancers: PropEnhancers = {
  willChange: (value: PropEnhancerValueType) => getCss(willChange, value),
}
