/*
 * @Author: saber2pr
 * @Date: 2019-06-16 13:52:00
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-16 13:52:00
 */
import { TSX } from '../type/attributes'

export function useRef<K extends keyof HTMLElementTagNameMap>(
  current: HTMLElementTagNameMap[K] = null
) {
  const ref: TSX.RefAttributes<K> = { current }
  return ref
}
