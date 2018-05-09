console.log('hello world');

// functional component
// component to pass to ReactDOM.render()
// container component for our site
const App = () => {
  return (
    <div>
      <header>...</header>
      <main>...</main>
      <footer>...</footer>
    </div>
  )
}

// takes 2 arguments
ReactDOM.render(
  // 1 - element to render, written in JSX
  <App />,
  // 2 - location to render
  document.querySelector('#root')
);
