import TSX, { renderString, Style } from '..'

function Page({ name }) {
  return (
    <html>
      <head>
        <Style>
          {{
            '.myTsx': { color: 'blue' }
          }}
        </Style>
        <title>{name}</title>
      </head>
      <body>
        <div className="myTsx">myTsx</div>
      </body>
    </html>
  )
}

// node
const html = renderString(<Page name="Taylor" />)
console.log(html)
