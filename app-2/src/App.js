import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
super();
  this.state = { captainplanet: ["earth", "fire","wind","water","heart","GO PLANET!"]}
  }
render() {
  let planeteers = this.state.captainplanet.map( (element, index) => {
  return (<h1 key={ index }>{ element }</h1>)})
  return (<div className="App">{ planeteers }</div>);}
}

export default App;
