/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:27:32
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 17:40:23
 */
import { toLowerCase } from '../utils/to-lowerCase'

export function toStyle(style: Partial<CSSStyleDeclaration>) {
  return Object.entries(style).reduce(
    (receiver, [k, v]) => receiver.concat(`${toLowerCase(k)}:${v};`),
    ''
  )
}
