/*
 * @Author: saber2pr
 * @Date: 2019-06-16 22:13:34
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 22:14:33
 */
export type Override<T, K extends keyof T, V> = {
  [P in keyof T]: P extends K ? V : T[P]
}
