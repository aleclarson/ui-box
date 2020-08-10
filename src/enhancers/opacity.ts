import getCss from '../get-css'
import {
  PropEnhancerValueType,
  PropValidators,
  PropEnhancers,
  PropAliases,
} from '../types/enhancers'

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const opacity = {
  className: 'opct',
  cssName: 'opacity',
  jsName: 'opacity',
  defaultUnit: '',
}

export const propEnhancers: PropEnhancers = {
  opacity: (value: PropEnhancerValueType) => getCss(opacity, value),
}
