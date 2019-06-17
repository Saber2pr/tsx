/*
 * @Author: saber2pr
 * @Date: 2019-06-17 16:50:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 21:42:53
 */
export function toArray<T>(elements: any) {
  return [].concat(...elements) as T[]
}
