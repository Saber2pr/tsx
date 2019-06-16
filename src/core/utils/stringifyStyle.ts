/*
 * @Author: saber2pr
 * @Date: 2019-06-16 22:01:40
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 22:09:24
 */
export function stringifyStyle(style: Object) {
  return Object.entries(style).reduce(
    (receiver, [k, v]) => receiver.concat(`${k}:${v};`),
    ''
  )
}
