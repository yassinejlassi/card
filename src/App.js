import React from 'react';
import Credit from './components/credit-card';
import Num from './components/CC-number';
import Valid from './components/valid';
import Image from './components/master';
import Info from './components/info';
import  './components/style.css'

function App() {
  return (
    <div className="App">
     <div className='titre'><Credit/></div>
     <div className="num"><Num/></div>
     <div className="validity"><Valid/></div>
     <div className="picture"><Image/></div>
     <div className="code"><Info/></div>
     
    </div>
  );
}

export default App;
