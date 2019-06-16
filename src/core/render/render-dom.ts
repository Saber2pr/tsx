/*
 * @Author: saber2pr
 * @Date: 2019-06-15 20:46:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 15:07:09
 */
import { VNode } from '../type/v-node'

export function renderDOM<K extends keyof HTMLElementTagNameMap>(
  vnode: VNode<K> | string = ''
): Text | HTMLElement {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(vnode)
  }

  const { type, props, children } = vnode

  const dom = Object.assign(document.createElement(type), props)
  props.ref && (props.ref.current = dom)

  const childs = children.map(renderDOM)
  dom.append(...childs)

  return dom
}
