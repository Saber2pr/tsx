/*
 * @Author: saber2pr
 * @Date: 2019-06-15 21:06:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-15 22:31:40
 */
import { VNode } from './v-node'
import { HTML5Shim } from './html5-shim'

declare global {
  namespace JSX {
    type IntrinsicElements = HTML5Shim &
      { [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K]> }

    interface Element extends VNode {}
  }
}
