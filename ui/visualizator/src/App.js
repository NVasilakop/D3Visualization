import logo from './logo.svg';
import './App.css';
import First from './Components/First/First'; 
import PieChart from './Components/PieChart/PieChart';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <First>
        
      </First>
    </div>
  );
}

export default App;
