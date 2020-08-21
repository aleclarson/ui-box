import getCss from '../get-css'
import {
  PropEnhancerValueType,
  PropValidators,
  PropEnhancers,
} from '../types/enhancers'

export const propAliases = {}

export const propValidators: PropValidators = {}

const mask = {
  className: 'msk',
  cssName: 'mask',
  jsName: 'mask',
  isPrefixed: true,
  complexValue: true,
}
const maskSize = {
  className: 'msk-siz',
  cssName: 'mask-size',
  jsName: 'maskSize',
  isPrefixed: true,
}

export const propEnhancers: PropEnhancers = {
  mask: (value: PropEnhancerValueType) => getCss(mask, value),
  maskSize: (value: PropEnhancerValueType) => getCss(maskSize, value),
}
