/*
 * @Author: saber2pr
 * @Date: 2019-06-16 22:14:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 21:23:58
 */
import { Override } from '../utils'
import { CSSStyle } from './cssstyle'

export namespace TSX {
  export type RefAttributes<K extends keyof HTMLElementTagNameMap = any> = {
    current: HTMLElementTagNameMap[K]
  }

  export interface VNodeAttributes<
    K extends keyof HTMLElementTagNameMap = any
  > {
    ref: RefAttributes<K>
    children: any
  }

  export type Attributes<K extends keyof HTMLElementTagNameMap> = Override<
    HTMLElementTagNameMap[K],
    'style',
    CSSStyle
  > &
    TSX.VNodeAttributes<K>

  export type IntrinsicAttributes<
    K extends keyof HTMLElementTagNameMap
  > = Partial<TSX.Attributes<K>>
}
