/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:26:34
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-17 17:26:34
 */
export function toLowerCase(value: string) {
  return value.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}
