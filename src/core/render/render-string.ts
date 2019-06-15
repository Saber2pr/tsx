/*
 * @Author: saber2pr
 * @Date: 2019-06-15 21:01:26
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-15 22:57:06
 */
import { VNode } from '../type/v-node'
import { veryifyKey } from '../utils'

export function renderString(vnode: VNode | string = '') {
  if (typeof vnode === 'string') return vnode

  const { type, props, children } = vnode

  const attr = Object.entries(props).reduce(
    (receiver, [k, v]) => receiver.concat(` ${veryifyKey(k)}="${v}"`),
    ''
  )

  return `<${type}${attr}>${children.map(renderString).join('')}</${type}>`
}
