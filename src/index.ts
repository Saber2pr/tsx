/*
 * @Author: saber2pr
 * @Date: 2019-06-15 22:43:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:08:29
 */
export * from './core'
export * from './components'
export * from './tools'
export * from './hook'

import * as core from './core'

function TSX() {
  return core.toVNode.apply(null, arguments)
}

namespace TSX {
  export const toStyle = core.toStyle
  export const toStyleSheet = core.toStyleSheet
  export const toArray = core.toArray
}

export default TSX
