/*
 * @Author: saber2pr
 * @Date: 2019-06-18 16:57:22
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 16:58:39
 */
export function cleanObj<T>(obj: T): T {
  return Object.entries(obj).reduce((receiver, [k, v]) => {
    if (v) receiver[k] = v
    return receiver
  }, {}) as T
}
