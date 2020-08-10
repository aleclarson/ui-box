import getCss from '../get-css'
import { getClassNamePrefix } from '../get-class-name'
import {
  PropEnhancerValueType,
  PropValidators,
  PropEnhancers,
  PropAliases,
} from '../types/enhancers'

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const display = {
  className: 'dspl',
  cssName: 'display',
  jsName: 'display',
  safeValue: true,
  isPrefixed: true,
}
const float = {
  className: 'flt',
  cssName: 'float',
  jsName: 'float',
  safeValue: true,
}
const clear = {
  className: 'clr',
  cssName: 'clear',
  jsName: 'clear',
  safeValue: true,
}
const zIndex = {
  className: 'z-idx',
  cssName: 'z-index',
  jsName: 'zIndex',
  safeValue: true,
  defaultUnit: '',
}
const boxSizing = {
  className: 'box-szg',
  cssName: 'box-sizing',
  jsName: 'boxSizing',
  safeValue: true,
}

export const propEnhancers: PropEnhancers = {
  boxSizing: (value: PropEnhancerValueType) => getCss(boxSizing, value),
  clear: (value: PropEnhancerValueType) => getCss(clear, value),
  clearfix: () => ({
    className: `${getClassNamePrefix()}clearfix`,
    styles: `
.${getClassNamePrefix()}clearfix:before, .${getClassNamePrefix()}clearfix:after {
  display: table;
  clear: both;
  content: "";
}`,
  }),
  display: (value: PropEnhancerValueType) => getCss(display, value),
  float: (value: PropEnhancerValueType) => getCss(float, value),
  zIndex: (value: PropEnhancerValueType) => getCss(zIndex, value),
}
