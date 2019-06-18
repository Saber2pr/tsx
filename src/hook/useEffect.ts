/*
 * @Author: saber2pr
 * @Date: 2019-06-18 15:21:03
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-18 15:21:03
 */
import { microtask } from '../core/utils'

// is not as react's hook
export function useEffect(effect: Function) {
  microtask(() => effect())
}
