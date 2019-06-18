import TSX, { renderDOM, Tabs, Tab } from '..'

const App = () => {
  return (
    <Tabs onclick={console.log}>
      <Tab name="1">
        <span>test1</span>
      </Tab>
      <Tab default name="2">
        <span>test2</span>
      </Tab>
    </Tabs>
  )
}

document.querySelector('#root').append(renderDOM(<App />))
