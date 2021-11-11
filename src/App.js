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
    let pokemonElArr = this.state.pokemonList.map((pokemonItem) => {
      return (
        <img src={pokemonItem.image} alt="Pokemon Image" />
      )
    });

    return (
      <div claaName="app">
        <h1>Pokémon React Code-Along</h1>
        { pokemonElArr }
      </div>
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