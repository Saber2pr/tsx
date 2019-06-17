/*
 * @Author: saber2pr
 * @Date: 2019-06-17 17:31:04
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 17:31:24
 */
import TSX, { toArray, toStyleSheet } from '../core'

export interface StyleSheet {
  [k: string]: Partial<CSSStyleDeclaration>
}

export function Style({ children }: { children?: StyleSheet }) {
  const stylesheet = toArray<CSSStyleDeclaration>(children).pop()

  return <style>{toStyleSheet(stylesheet)}</style>
}
