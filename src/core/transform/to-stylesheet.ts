/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:23:41
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-17 17:23:41
 */
import { toStyle } from './to-style'

export function toStyleSheet(style: CSSStyleDeclaration) {
  return Object.entries(style).reduce(
    (receiver, [k, v]) => receiver.concat(`${k}{${toStyle(v)}}`),
    ''
  )
}
