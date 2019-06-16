/*
 * @Author: saber2pr
 * @Date: 2019-06-16 15:47:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 16:29:46
 */
import { useRef } from './useRef'
import { bind } from '../utils'
import { TSX } from '../type/attributes'

export function useVM<K extends keyof HTMLElementTagNameMap, T>(
  state: T,
  map: Partial<Record<keyof T, keyof HTMLElementTagNameMap[K]>>
): [T, TSX.RefAttributes<K>] {
  const ref = useRef<K>()

  setTimeout(() => bind(state, ref.current, map))

  return [state, ref]
}
