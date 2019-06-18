/*
 * @Author: saber2pr
 * @Date: 2019-06-18 17:02:03
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 17:21:11
 */
import TSX, { toArray, Store } from '../core'
import { useRef, useEffect } from '../hook/index'

const store = new Store<string>()

export interface Route {
  path: string
  component: JSX.Element
  default?: boolean
}

export function Route({ component, path, default: val }: Route) {
  const ref = useRef<'section'>()
  return (
    <section ref={ref} {...{ path, default: val }}>
      {component}
    </section>
  )
}

export interface Router {
  children: JSX.Element[] | JSX.Element
}

export function Router({ children }: Router) {
  const routes = toArray<JSX.Element>(children)

  const display = (path: string) =>
    routes.forEach(c => {
      if (c.props['path'] === path) {
        c.props.ref.current.style.display = 'block'
      } else {
        c.props.ref.current.style.display = 'none'
      }
    })

  useEffect(() => {
    const defaultTab: JSX.Element =
      routes.find(c => c.props['default']) || children[0]
    display(defaultTab.props['path'])
    location.hash = `#${defaultTab.props['path']}`
  })

  store.subscribe(() => display(store.getState()))
  return <div>{children}</div>
}

export interface Link extends Partial<HTMLAnchorElement> {
  to: string
  children?: any
}

export function Link({ to, children, onclick, ...props }: Link) {
  const dispatch = (ev: MouseEvent) => {
    ev.preventDefault()
    location.hash = `#${to}`
    onclick && onclick.call(ev, ev)
  }

  return (
    <a {...props} onclick={dispatch}>
      {children}
    </a>
  )
}

window.onhashchange = ev => store.dispatch(ev.newURL.split('#').pop())
