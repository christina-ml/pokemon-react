import { Component } from "react";
import './App.css';
import data from './data/sortedData';

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonList: data.pokemon,
    }
  }
  
  render(){
    console.log(this.state.pokemonList)
    return (
      <div>Hello Pokémon</div>
    );
  }
}

export default App;



/*
    console.log(data.pokemon[0])

    for (let poke of data.pokemon){
      console.log(poke.name);
    }
*/