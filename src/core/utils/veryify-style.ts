/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:35:37
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 17:40:34
 */
import { toStyle } from '../transform/to-style'
import { VNode } from '../type'

export function veryifyStyle(vnode: VNode): VNode {
  const { type, props, children } = vnode
  if (props.style) Reflect.set(props, 'style', toStyle(props.style))

  return { type, props, children }
}
