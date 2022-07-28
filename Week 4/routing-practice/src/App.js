import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
import Number from './components/Number';
import Color from './components/Color';

function App() {

  const input = () => {

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={isNaN=("/:word")} element={<Word />}/>
          <Route path="/:number" element={<Number />}/>
          <Route path={isNaN=("/:word/:color/:bgColor")} element={<Color />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
