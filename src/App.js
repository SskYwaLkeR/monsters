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
  handleSearch = e => {
    this.setState({searchValue : e.target.value})
  }
  render(){
    const {monsters, searchValue} = this.state;
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return(
      <div className="App">
      
        <h1>Monsters</h1>

        <SearchBox
        placeholder="Search monster"
        handleChange = {this.handleSearch}
        />

        <CardList 
        monsters = {filteredMonsters}
        />
      </div>
    )
  }
}

export default App;
