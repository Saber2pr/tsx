/*
 * @Author: saber2pr
 * @Date: 2019-06-15 22:30:54
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-15 23:04:02
 */
import TSX, { renderDOM, renderString } from '..'

function HelloMessage({ name }) {
  return <div>Hello {name}</div>
}

// browser
const dom = renderDOM(<HelloMessage name="Taylor" />)
document.getElementById('root').append(dom)

// node
const html = renderString(<HelloMessage name="Taylor" />)
console.log(html)

// what's more
// document.getElementById('root').innerHTML = html
