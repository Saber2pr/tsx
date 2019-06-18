import TSX, { renderDOM, Route, Router, Link } from '..'

const App = () => {
  return (
    <div>
      <nav>
        <Link onclick={e => console.log('1', e)} to="/1">
          1
        </Link>
        <Link to="/2">2</Link>
      </nav>
      <Router>
        <Route path="/1" component={<span>test1</span>} />
        <Route default path="/2" component={<span>test2</span>} />
      </Router>
    </div>
  )
}

document.querySelector('#root').append(renderDOM(<App />))
