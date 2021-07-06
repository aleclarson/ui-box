import { BoxComponent } from './types/box-types'
import createBox from './create-box'

const Box = createBox('Box') as BoxComponent<{}, 'div'> & {
  create: typeof createBox
}

Box.create = createBox

export default Box
