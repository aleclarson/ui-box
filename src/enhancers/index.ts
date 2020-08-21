import * as background from './background'
import * as borderRadius from './border-radius'
import * as borders from './borders'
import * as boxShadow from './box-shadow'
import * as dimensions from './dimensions'
import * as flex from './flex'
import * as grid from './grid'
import * as interaction from './interaction'
import * as layout from './layout'
import * as list from './list'
import * as mask from './mask'
import * as opacity from './opacity'
import * as outline from './outline'
import * as overflow from './overflow'
import * as position from './position'
import * as resize from './resize'
import * as spacing from './spacing'
import * as text from './text'
import * as transform from './transform'
import * as transition from './transition'
import * as willChange from './will-change'
import { PropValidators, PropEnhancers, PropAliases } from '../types/enhancers'

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  grid,
  interaction,
  layout,
  list,
  mask,
  opacity,
  outline,
  overflow,
  position,
  resize,
  spacing,
  text,
  transform,
  transition,
  willChange,
}

export const propAliases: PropAliases = {
  ...background.propAliases,
  ...borderRadius.propAliases,
  ...borders.propAliases,
  ...boxShadow.propAliases,
  ...dimensions.propAliases,
  ...flex.propAliases,
  ...grid.propAliases,
  ...interaction.propAliases,
  ...layout.propAliases,
  ...list.propAliases,
  ...mask.propAliases,
  ...opacity.propAliases,
  ...outline.propAliases,
  ...overflow.propAliases,
  ...position.propAliases,
  ...resize.propAliases,
  ...spacing.propAliases,
  ...text.propAliases,
  ...transform.propAliases,
  ...transition.propAliases,
  ...willChange.propAliases,
}

export const propValidators: PropValidators = {
  ...background.propValidators,
  ...borderRadius.propValidators,
  ...borders.propValidators,
  ...boxShadow.propValidators,
  ...dimensions.propValidators,
  ...flex.propValidators,
  ...grid.propValidators,
  ...interaction.propValidators,
  ...layout.propValidators,
  ...list.propValidators,
  ...mask.propValidators,
  ...opacity.propValidators,
  ...outline.propValidators,
  ...overflow.propValidators,
  ...position.propValidators,
  ...resize.propValidators,
  ...spacing.propValidators,
  ...text.propValidators,
  ...transform.propValidators,
  ...transition.propValidators,
  ...willChange.propValidators,
}

export const propEnhancers: PropEnhancers = {
  ...background.propEnhancers,
  ...borderRadius.propEnhancers,
  ...borders.propEnhancers,
  ...boxShadow.propEnhancers,
  ...dimensions.propEnhancers,
  ...flex.propEnhancers,
  ...grid.propEnhancers,
  ...interaction.propEnhancers,
  ...layout.propEnhancers,
  ...list.propEnhancers,
  ...mask.propEnhancers,
  ...opacity.propEnhancers,
  ...outline.propEnhancers,
  ...overflow.propEnhancers,
  ...position.propEnhancers,
  ...resize.propEnhancers,
  ...spacing.propEnhancers,
  ...text.propEnhancers,
  ...transform.propEnhancers,
  ...transition.propEnhancers,
  ...willChange.propEnhancers,
}

export const propNames = Object.keys(propAliases).concat(
  Object.keys(propEnhancers)
)
