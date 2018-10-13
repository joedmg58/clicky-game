import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Statusbar from './Components/Statusbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CardDeck from './Components/CardDeck';

class App extends Component {
  
  render() {
    return (
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <div className="App">
        <Statusbar/>
        <Header/>
        <CardDeck />
        <Footer/>
      </div>

    );
  }
}

export default App;
