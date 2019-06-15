/*
 * @Author: saber2pr
 * @Date: 2019-06-15 20:46:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-15 22:57:00
 */
import { VNode } from '../type/v-node'

export function renderDOM(vnode: VNode | string = ''): Text | HTMLElement {
  if (typeof vnode === 'string') return document.createTextNode(vnode)

  const { type, props, children } = vnode

  const dom = Object.assign(document.createElement(type), props)

  const childs = children.map(renderDOM)
  dom.append(...childs)

  return dom
}
