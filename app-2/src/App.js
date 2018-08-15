import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
  constructor() {
    super();
      this.state = {
        filterString: "",
        array: ["earth", "fire","wind","water","heart","GO PLANET!"]}}
    
  handleChange(filter) {
  this.setState({filterString: filter})}
  render() {

  let planeteers = this.state.array.filter( (element, index) => 
      
    {return element.includes(this.state.filterString)}).map(  (element, index)=>
        
      {return(<h1 key = {index}>{element}</h1>)})

  return (<div className="App">
  <input onChange={(e) => this.handleChange( e.target.value ) } type="text" />
  { planeteers }
  </div>)
  }
}