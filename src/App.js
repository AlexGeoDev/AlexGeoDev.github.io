import './App.css';
import { Home } from './components/Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';

//import { Button } from 'bootstrap';


function App() {
  return (
    <div className="App">
      <HashRouter>

        <Routes>
          <Route path="/" element={<header className="App-header">
            <Home />
          </header>} />
          <Route path="/#/about" element={<About />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
