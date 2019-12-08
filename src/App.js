import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : []
    };
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => this.setState({monsters: result}))
  }
  render(){
    return(
      <div className="App">
        <CardList>
        {this.state.monsters.map((monster,i) => <h1 key={i}>{monster.name}</h1>)}          
        </CardList>
      </div>
    )
  }
}

export default App;
