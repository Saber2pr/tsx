/*
 * @Author: saber2pr
 * @Date: 2019-06-17 21:39:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:05:24
 */
import TSX, { StyleSheet, renderDOM, toStyleSheet } from '../core'
import { Style } from '../components'

/**
 * ### Inject StyleSheet into `<head></head>`
 * > for example
 * ```ts
 * Config_StyleSheet({
 *   '.hello': {
 *      color: 'red',
 *      backgroundColor: 'blue'
 *   },
 *   '#hello': {
 *      color: 'red',
 *      backgroundColor: 'blue'
 *   },
 *   '#hello>li': {
 *      color: 'red',
 *      backgroundColor: 'blue'
 *   }
 * })
 * ```
 *
 * @export
 * @param {StyleSheet} stylesheet
 */
export function Config_StyleSheet(stylesheet: StyleSheet) {
  let container = document.head.querySelector('style')

  if (!container) {
    container = renderDOM<'style'>(<Style>{stylesheet}</Style>)

    document.head.append(container)
  } else {
    container.innerText += toStyleSheet(stylesheet)
  }
}
