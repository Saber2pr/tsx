import TSX, { renderDOM, renderString } from '..'
import { useRef } from '../core'

function HelloMessage({ name }) {
  const ref = useRef<'div'>()

  return (
    <div ref={ref} onclick={() => (ref.current.style.color = 'blue')}>
      Hello {name}
    </div>
  )
}

// browser
const dom = renderDOM(<HelloMessage name="Taylor" />)
document.getElementById('root').append(dom)

// node
const html = renderString(<HelloMessage name="Taylor" />)
console.log(html)

// what's more
// document.getElementById('root').innerHTML = html
