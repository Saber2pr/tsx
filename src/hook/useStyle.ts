/*
 * @Author: saber2pr
 * @Date: 2019-06-17 22:05:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:18:55
 */
import { StyleSheet } from '../core'
import { Config_StyleSheet } from '../tools'

// is not as react's hook
export function useStyle(stylesheet: StyleSheet) {
  Config_StyleSheet(stylesheet)
}
