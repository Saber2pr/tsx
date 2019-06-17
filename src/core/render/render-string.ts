/*
 * @Author: saber2pr
 * @Date: 2019-06-15 21:01:26
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:00:44
 */
import { veryifyKey, veryifyStyle } from '../utils'

export function renderString(vnode: JSX.Element | string = ''): string {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return vnode
  }

  const { type, props, children } = veryifyStyle(vnode)

  const attr = Object.entries(props).reduce((receiver, [k, v]) => {
    if (typeof v !== 'string') return receiver

    return receiver.concat(` ${veryifyKey(k)}="${v}"`)
  }, '')

  return `<${type}${attr}>${children.map(renderString).join('')}</${type}>`
}
