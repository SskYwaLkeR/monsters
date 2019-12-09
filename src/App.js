import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchValue: '',
    };
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => this.setState({monsters: result}))
  }
  render(){
    const {monsters, searchValue} = this.state;
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return(
      <div className="App">
      
        <SearchBox
        placeholder="Search monster"
        handleChange = {e => this.setState({searchValue : e.target.value})}
        />

        <CardList 
        monsters = {filteredMonsters}
        />
      </div>
    )
  }
}

export default App;
