import { Component } from "react";
import './App.css';
import data from './data/sortedData';
import PokemonCard from "./components/PokemonCard";

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonList: data.pokemon,
    }
  }

  render(){
    /* Add pokemon names dynamically as list items in JSX */
    let pokemonListItem = this.state.pokemonList.map((pokemon) => {
      return (
        <PokemonCard pokemon={pokemon} />
      )
    })

    return (
      <div className="app" id="app-container">
        <h1>Pokémon React Code-Along</h1>
        <div id="pokemon-list-container">
          { pokemonListItem }
        </div>
        {/* { pokemonElArr } */}
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
