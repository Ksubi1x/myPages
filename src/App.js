
import './App.css';
import './fonts/Vilane Regular.ttf'
import './fonts/Vilane Medium.ttf'
import Hamburger from './components/hamburger/Hamburger'
import { useState } from 'react';


function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <div className='container'>
          <Hamburger />
          
        </div>
      </div>
    </div>
  );
}

export default App;
