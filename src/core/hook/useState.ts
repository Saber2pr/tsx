/*
 * @Author: saber2pr
 * @Date: 2019-06-16 16:17:03
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 16:27:58
 */
import { useVM } from './useVM'
import { TSX } from '../type/attributes'

export function useStore(state: number): [{ state: number }, TSX.RefAttributes]
export function useStore(state: string): [{ state: string }, TSX.RefAttributes]
export function useStore(
  state: string | number
): [{ state: string | number }, TSX.RefAttributes] {
  return useVM({ state }, { state: 'innerText' })
}
