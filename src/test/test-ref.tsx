import TSX, { renderDOM } from '..'
import { useRef } from '../core/hook/useRef'

function HelloMessage() {
  let state = 0

  const ref = useRef<'span'>()

  return (
    <div>
      count: <span ref={ref}>{state}</span>
      <button onclick={() => (ref.current.innerText = String(++state))}>
        add
      </button>
    </div>
  )
}

// browser
const dom = renderDOM(<HelloMessage />)
document.getElementById('root').append(dom)

// what's more
// document.getElementById('root').innerHTML = html
