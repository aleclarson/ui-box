import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers,  } from '../types/enhancers'

export const propAliases = {}

export const propValidators: PropValidators = { }

const resize = {
  className: 'rsz',
  cssName: 'resize',
  jsName: 'resize'
}

export const propEnhancers: PropEnhancers = {
  resize: (value: PropEnhancerValueType) => getCss(resize, value)
}
