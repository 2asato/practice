console.log('hello world');

// functional component
// component to pass to ReactDOM.render()
// container component for our site
const App = () => {
  return (
    <div>
      <header>
        <h1>Website</h1>
      </header>
      <main>
        <h2>I am Bib Fortuna</h2>
        <img src="https://i.pinimg.com/236x/86/9b/6d/869b6d02226dfdd4b0ddc49086417f13--jabbas-palace-bibs.jpg"/>
      </main>
      <footer>
        <small>Die wanna wanga</small>
      </footer>
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
