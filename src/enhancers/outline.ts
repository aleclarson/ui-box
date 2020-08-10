import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers,  } from '../types/enhancers'


export const propAliases = {}

export const propValidators: PropValidators = { }

const outline = {
  className: 'otln',
  cssName: 'outline',
  jsName: 'outline',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  outline: (value: PropEnhancerValueType) => getCss(outline, value)
}
