import { Component } from "react";
import './App.css';
import data from './data/sortedData';
import PokemonCard from "./components/PokemonCard";

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonList: data.pokemon,
      selectedPokemon: {},
    }
  }

  handlePokemonClick=(pokemon)=>{
    this.setState({
      selectedPokemon: pokemon
    })
    // console.log(pokemon);
  }


  render(){
    /* Add pokemon names dynamically as list items in JSX */
    let pokemonListItem = this.state.pokemonList.map((pokemon) => {
      return (
        <PokemonCard pokemon={pokemon} handlePokemonClick={this.handlePokemonClick}/>
      )
    })

    return (
      <div className="app" id="app-container">
        <h1>Pokémon React Code-Along</h1>
        <div>
          <h3>Currently Selected Pokemon</h3>
          <img src={this.state.selectedPokemon.image} alt="Selected pokemon image" />
          <div>{this.state.selectedPokemon.name}</div>
        </div>
        <div id="pokemon-list-container">
          { pokemonListItem }
        </div>
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


/*
  what this will look like in the object:

  selectedPokemon: {
    name: '',
    image: ''
  },
*/