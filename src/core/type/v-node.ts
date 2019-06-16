/*
 * @Author: saber2pr
 * @Date: 2019-06-16 12:10:43
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 13:53:20
 */
import { TSX } from './attributes'

export interface VNode<
  K extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap
> {
  type: K
  props?: TSX.IntrinsicAttributes<K>
  children?: Array<VNode<any>>
  ref?: HTMLElementTagNameMap[K]
}
