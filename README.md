# @saber2pr/tsx

> tsx renderer.

```bash
# from npm
npm install @saber2pr/tsx

# from github
git clone ___
```

# Examples

```tsx
import TSX, { renderDOM, renderString } from '@saber2pr/tsx'

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
