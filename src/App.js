import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav >
          <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
          </ul>       
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>This is my demo react app</h1>
      </header>
    </div>
  );
}

export default App;
