/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:23:41
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 21:30:45
 */
import { toStyle } from './to-style'
import { StyleSheet } from '../type'

export function toStyleSheet(stylesheet: StyleSheet) {
  return Object.entries(stylesheet).reduce(
    (receiver, [k, v]) => receiver.concat(`${k}{${toStyle(v)}}`),
    ''
  )
}
