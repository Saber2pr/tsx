import { VNode } from '../type'

export function toVNode<K extends keyof HTMLElementTagNameMap>(
  type: VNode<K>['type'] | Function,
  props: VNode<K>['props'] = {},
  ...children: VNode<K>['children']
) {
  if (typeof type === 'function') return type({ ...props, children })

  return { type, props: { ...props }, children: [].concat(...children) }
}
