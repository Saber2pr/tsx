/*
 * @Author: saber2pr
 * @Date: 2019-06-16 13:52:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 22:08:06
 */
import { TSX } from '../core'

// is not as react's hook
export function useRef<K extends keyof HTMLElementTagNameMap>(
  current: HTMLElementTagNameMap[K] = null
) {
  const ref: TSX.RefAttributes<K> = { current }
  return ref
}
