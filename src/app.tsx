import TSX, { render } from "./index"

function Page({ name }) {
  return (
    <html>
      <head>
        <title>{name}</title>
      </head>
      <body>
        <div className="myTsx">
          <ul>
            {["a", "b", "c"].map(c => (
              <li>{c}</li>
            ))}
          </ul>
          <button
            style={{ color: "red" }}
            ref={console.log}
            onclick={() => console.log("??")}
          >
            click
          </button>
        </div>
      </body>
    </html>
  )
}

render(<Page name="test" />, document.body)
