import TSX, { renderString } from '..'

function HelloMessage({ name }) {
  return (
    <div
      className="testClassName"
      id="testId"
      onclick={() => {}}
      style={{ color: 'red' }}
    >
      Hello {name}
    </div>
  )
}

// node
const html = renderString(<HelloMessage name="Taylor" />)
console.log(html)
