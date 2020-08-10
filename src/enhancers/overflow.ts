import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers,  PropAliases } from '../types/enhancers'


export const propAliases: PropAliases = {
  overflow: ['overflowX', 'overflowY']
}

export const propValidators: PropValidators = {}

const overflowY = {
  className: 'ovflw-y',
  cssName: 'overflow-y',
  jsName: 'overflowY',
  safeValue: true
}
const overflowX = {
  className: 'ovflw-x',
  cssName: 'overflow-x',
  jsName: 'overflowX',
  safeValue: true
}

export const propEnhancers: PropEnhancers = {
  overflowX: (value: PropEnhancerValueType) => getCss(overflowX, value),
  overflowY: (value: PropEnhancerValueType) => getCss(overflowY, value)
}
