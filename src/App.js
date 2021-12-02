import React, { Component } from 'react'
import './App.css';
import Person from './Person';


  function App() {
    return (
      <div className="App">
        <header className="App-header">
        <Person>
        <img src="/public/me.jpg" alt=""></img>
        </Person>
        </header>
      </div>
    );
  }
  
  export default App;
