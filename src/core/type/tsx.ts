/*
 * @Author: saber2pr
 * @Date: 2019-06-15 21:06:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 21:36:17
 */
import { VNode } from './v-node'
import { TSX } from './attributes'

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof HTMLElementTagNameMap]: TSX.IntrinsicAttributes<K>
    }

    interface Element extends VNode {}

    interface ElementChildrenAttribute {
      children: {}
    }

    export import RefAttributes = TSX.RefAttributes
  }
}
