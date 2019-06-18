import TSX, { renderDOM, useEffect } from '..'
import { useRef } from '../hook'

function HelloMessage({ name }) {
  const ref = useRef<'div'>()

  useEffect(() => {
    ref.current.style.backgroundColor = 'black'
  })

  return (
    <div ref={ref} style={{ color: 'blue' }}>
      Hello {name}
    </div>
  )
}

// browser
const dom = renderDOM(
  <HelloMessage
    name={
      <h1>
        <HelloMessage name="World" />
      </h1>
    }
  />
)
document.getElementById('root').append(dom)

// what's more
// document.getElementById('root').innerHTML = html
