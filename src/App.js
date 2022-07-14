import React from 'react';
import './App.css';

import Main from './pages/Main'
import Detail from './pages/Detail'

import {Routes, Route} from "react-router-dom"


function App() {
  


  return (
    <div className='total'>
      <header className='header'  onClick={() => {
                    window.location.replace("/")
                }}>🔖나만의 단어장</header>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
