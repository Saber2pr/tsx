/*
 * @Author: saber2pr
 * @Date: 2019-06-18 17:01:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 17:18:55
 */
import TSX from '../core'
import { useEffect } from '../hook'

export interface Tabs extends Omit<Partial<HTMLButtonElement>, 'children'> {
  children?: JSX.Element[]
}

export const Tabs = ({ children, className, onclick, ...props }: Tabs) => {
  const display = (index = 0) =>
    children.forEach((c, i) => {
      c.props.ref.current.style.display = i === index ? 'block' : 'none'
    })

  useEffect(() => {
    const defaultTab = children.find(c => c.props['default']) || children[0]
    display(children.indexOf(defaultTab))
  })

  return (
    <div>
      <nav>
        {children.map((c, i) => (
          <button
            {...props}
            className={className}
            onclick={ev => {
              display(i)
              onclick && onclick.call(ev, ev)
            }}
          >
            {c.props['name']}
          </button>
        ))}
      </nav>
      {children}
    </div>
  )
}

export const Tab = ({
  children,
  ...props
}: {
  name: string
  children: any
  default?: boolean
}) => (
  <div ref={{}} {...props as any}>
    {children}
  </div>
)
