import TSX, { renderDOM } from '..'
import { useVM } from '../core'
import { useStore } from '../core/hook/useState'

function Counter() {
  // const [state, ref] = useVM({ count: 0 }, { count: 'innerHTML' })
  const [store, ref] = useStore(1)
  const [store2, ref2] = useStore('a')

  return (
    <div>
      <span ref={ref}>{store.state}</span>
      <span ref={ref2}>{store2.state}</span>
      <button onclick={() => store.state++}>add</button>
      <button onclick={() => (store2.state += 'a')}>add2</button>
    </div>
  )
}

document.getElementById('root').append(renderDOM(<Counter />))
