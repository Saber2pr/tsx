/*
 * @Author: saber2pr
 * @Date: 2019-06-17 16:50:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 16:53:13
 */
export function toArray<T>(items: any) {
  return [].concat(...items) as T[]
}
