import TSX, { renderDOM } from '..'

function HelloMessage({ name }) {
  return <div style={{ color: 'blue' }}>Hello {name}</div>
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
