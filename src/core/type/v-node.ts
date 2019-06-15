/*
 * @Author: saber2pr
 * @Date: 2019-06-15 21:05:47
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-15 22:39:20
 */
export interface VNode<K extends keyof HTMLElementTagNameMap = any> {
  type: K
  props?: Partial<HTMLElementTagNameMap[K]>
  children?: Array<VNode<any>>
  ref?: HTMLElement | Text
}
