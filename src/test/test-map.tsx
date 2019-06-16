import TSX, { renderDOM } from '..'

function HelloMessage({ names }: { names: string[] }) {
  return (
    <ul>
      {names.map(n => (
        <li>{n}</li>
      ))}
    </ul>
  )
}

// browser
const dom = renderDOM(
  <HelloMessage names={['saber', 'saber2pr', 'nanasaki', 'AK-12']} />
)
document.getElementById('root').append(dom)

// what's more
// document.getElementById('root').innerHTML = html
