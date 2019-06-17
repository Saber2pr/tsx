/*
 * @Author: saber2pr
 * @Date: 2019-06-15 20:46:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:11:10
 */
import { veryifyStyle } from '../utils'

export function renderDOM(vnode?: string): Text
export function renderDOM<K extends keyof HTMLElementTagNameMap>(
  vnode: JSX.Element
): HTMLElementTagNameMap[K]

export function renderDOM<K extends keyof HTMLElementTagNameMap>(
  vnode: JSX.Element | string = ''
): Text | HTMLElementTagNameMap[K] {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(vnode)
  }

  const { type, props, children } = veryifyStyle(vnode)

  const dom = Object.assign(document.createElement(type), props)
  props.ref && (props.ref.current = dom)

  dom.append(...children.map(renderDOM))

  return dom as HTMLElementTagNameMap[K]
}
