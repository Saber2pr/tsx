/*
 * @Author: saber2pr
 * @Date: 2019-06-16 12:48:58
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 13:42:29
 */
export namespace TSX {
  export type RefAttributes<K extends keyof HTMLElementTagNameMap = any> = {
    current: HTMLElementTagNameMap[K]
  }

  export interface VNodeAttributes {
    ref: RefAttributes
  }

  export type Attributes<
    K extends keyof HTMLElementTagNameMap
  > = HTMLElementTagNameMap[K] & TSX.VNodeAttributes

  export type IntrinsicAttributes<
    K extends keyof HTMLElementTagNameMap
  > = Partial<HTMLElementTagNameMap[K] & TSX.Attributes<K>>
}
