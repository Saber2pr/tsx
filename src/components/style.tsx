/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:31:04
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 21:32:50
 */
import TSX, { toArray, toStyleSheet, StyleSheet } from '../core'

export function Style({ children }: { children?: StyleSheet }) {
  const stylesheet = toArray<StyleSheet>(children).pop()

  return <style>{toStyleSheet(stylesheet)}</style>
}
