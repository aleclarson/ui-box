import { createBox } from './create-box'
import { BoxComponent } from './types/box-types'

const Box = createBox('Box') as BoxComponent<{}, 'div'> & {
  create: typeof createBox
}

Box.create = createBox

export default Box
