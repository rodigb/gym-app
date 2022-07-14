import React from 'react';
import Navbar from './components/navbar'
import Home from './pages/home'

import {Card} from './components/cards'


import './App.scss';



function App() {
  return (
    <div className="App">

        <Navbar></Navbar>
        
        <div className="background">
            <Home></Home>
        </div>
        


    </div>

    
  );
}

export default App;
