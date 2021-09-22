import coverDark from './images/cover-dark.svg';
import coverLight from './images/cover-light.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coverLight} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
