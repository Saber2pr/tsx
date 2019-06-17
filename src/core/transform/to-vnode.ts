/*
 * @Author: saber2pr
 * @Date: 2019-06-16 11:28:02
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 16:51:06
 */
import { VNode } from '../type'
import { toArray } from '../utils'

export function toVNode<K extends keyof HTMLElementTagNameMap>(
  type: VNode<K>['type'] | Function,
  props: VNode<K>['props'] = {},
  ...children: VNode<K>['children']
) {
  if (typeof type === 'function') return type({ ...props, children })

  return { type, props: { ...props }, children: toArray(children) }
}
