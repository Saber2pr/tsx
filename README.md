# @saber2pr/tsx

> a tsx renderer for the browser and node.js

> 纯粹的视图层

```bash
# from npm
npm install @saber2pr/tsx

# from github
git clone https://github.com/Saber2pr/tsx.git
```

# Examples

## in browser.

```tsx
import TSX, { renderDOM } from '@saber2pr/tsx'

function HelloMessage({ name }) {
  return <div>Hello {name}</div>
}

// render to dom.
document
  .getElementById('root')
  .append(renderDOM(<HelloMessage name="Taylor" />))
```

## in node.js

```tsx
import TSX, { renderString, Style } from '@saber2pr/tsx'

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

// render to string.
console.log(renderString(<Page name="My Tsx" />))
```

# tsx

1. tsx map
2. tsx render children

> and more feature supported.

# tsconfig

ensure:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "TSX"
  }
}
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
