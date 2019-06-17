/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:27:32
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 21:24:43
 */
import { toLowerCase } from '../utils/to-lowerCase'
import { CSSStyle } from '../type'

export function toStyle(style: CSSStyle) {
  return Object.entries(style).reduce(
    (receiver, [k, v]) => receiver.concat(`${toLowerCase(k)}:${v};`),
    ''
  )
}
