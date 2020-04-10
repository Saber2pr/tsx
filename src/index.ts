/*
 * @Author: saber2pr
 * @Date: 2019-11-29 22:48:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-04-10 19:45:47
 */
const flat1 = <T>(arr: T[]) => [].concat(...arr)
const flat2 = <T>(arr: T[]) => flat1(flat1(arr))

const has = <T>(array: T[], item: T) => array.includes(item)

const toAttr = (props: Props) =>
  Object.entries(props).reduce(
    (props, [k, v]) => {
      if (!has(["ref", "style"], k)) {
        const className = has(["class", "classname"], k) ? "className" : k
        props[className] = v
      }
      return props
    },
    {} as Props
  )

const flatList = <T>(children: T[]) =>
  flat2(children).filter(ch =>
    typeof ch === "string" ? ch.replace(/ |\r?\n|\r/g, "") : 1
  )

type Props = {
  ref: TSX.Ref
  style: CSSStyle
}

type HostVNode = {
  type: keyof HTMLElementTagNameMap
  props: Props
  children: Node[]
}

const renderDOM = (vnode: HostVNode) => {
  const { type, props, children } = vnode
  const dom = document.createElement(type)

  if (props) {
    Object.assign(dom, toAttr(props))
    if (props.style) Object.assign(dom["style"], props.style)

    if (props.ref) {
      if (typeof props.ref === "function") {
        props.ref(dom)
      } else {
        props.ref.current = dom
      }
    }
  }

  dom.append(...children)
  return dom
}

export function TSX(type: any, props: any, ...children: any[]) {
  children = flatList(children)
  if (typeof type === "function") {
    return type({ ...props, children: children[1] ? children : children[0] })
  } else {
    return renderDOM({ type, props, children })
  }
}
export default TSX

export type Suspense = {
  fallback: Node
  children: Promise<Node>
}

export const Suspense = ({ fallback, children }: Suspense) => {
  children.then(dom => {
    const container = fallback.parentNode
    container.replaceChild(dom, fallback)
  })
  return fallback
}

export type LazyComponent = (props: Props) => Promise<{ default: Node }>

export const lazy = (lazyComponent: LazyComponent) => (props: Props) =>
  lazyComponent(props).then(component => component.default)

export const render = (component: Node, container: HTMLElement) => {
  container.innerHTML = ""
  container.append(component)
}

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof HTMLElementTagNameMap]: TSX.IntrinsicAttributes<K>
    }

    interface Element extends HTMLElement {}
    interface ElementChildrenAttribute {
      children: {}
    }
    export import Ref = TSX.Ref
  }
}

export namespace TSX {
  export type Ref<K extends keyof HTMLElementTagNameMap = any> =
    | {
        current: HTMLElementTagNameMap[K]
      }
    | ((instance: HTMLElementTagNameMap[K]) => void)

  interface ExternalAttributes<K extends keyof HTMLElementTagNameMap = any> {
    ref: Ref<K>
    children: any
  }

  type Attributes<K extends keyof HTMLElementTagNameMap = any> = Override<
    HTMLElementTagNameMap[K],
    "style",
    CSSStyle
  > &
    ExternalAttributes<K>

  export type IntrinsicAttributes<
    K extends keyof HTMLElementTagNameMap
  > = Partial<Attributes<K>>
}

export type CSSStyle = Partial<CSSStyleDeclaration>

type Override<T, K extends keyof T, V> = {
  [P in keyof T]: P extends K ? V : T[P]
}

export interface Microtask extends MutationCallback {}

export function microtask(task: Microtask) {
  if (
    typeof process !== "undefined" &&
    typeof process.nextTick === "function"
  ) {
    process.nextTick(task)
  } else {
    const observer = new MutationObserver(task)
    const element = document.createTextNode("")
    observer.observe(element, {
      characterData: true
    })
    element.data = ""
  }
}

export function useEffect(effect: Function) {
  microtask(() => effect())
}

export function useRef<K extends keyof HTMLElementTagNameMap>(
  current: HTMLElementTagNameMap[K] = null
) {
  const ref: TSX.Ref<K> = { current }
  return ref
}
