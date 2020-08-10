import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers,  PropAliases } from '../types/enhancers'


export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const boxShadow = {
  className: 'bs',
  cssName: 'box-shadow',
  jsName: 'boxShadow',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  boxShadow: (value: PropEnhancerValueType) => getCss(boxShadow, value)
}
