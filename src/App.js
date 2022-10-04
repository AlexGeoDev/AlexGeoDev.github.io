import './App.css';
import { Home } from './components/Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
