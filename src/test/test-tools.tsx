import TSX, { renderDOM, Config_StyleSheet } from '..'
import { useStyle } from '../hook'

function HelloMessage({ name }) {
  useStyle({
    '#test-useStyle': {
      backgroundColor: 'green'
    }
  })
  return (
    <div className="hello">
      Hello {name}
      <span id="test-useStyle">test useStyle</span>
    </div>
  )
}

// browser
const dom = renderDOM(<HelloMessage name="World" />)
document.getElementById('root').append(dom)

Config_StyleSheet({
  '.hello': {
    color: 'red',
    backgroundColor: 'blue'
  }
})

// what's more
// document.getElementById('root').innerHTML = html
