/*
 * @Author: saber2pr
 * @Date: 2019-06-15 20:46:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 22:09:10
 */
import { VNode } from '../type'
import { stringifyStyle } from '../utils'

export function renderDOM<K extends keyof HTMLElementTagNameMap>(
  vnode: VNode<K> | string = ''
): Text | HTMLElement {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(vnode)
  }

  const { type, props, children } = vnode
  if (props.style) Reflect.set(props, 'style', stringifyStyle(props.style))

  const dom = Object.assign(document.createElement(type), props)
  props.ref && (props.ref.current = dom)

  dom.append(...children.map(renderDOM))

  return dom
}
