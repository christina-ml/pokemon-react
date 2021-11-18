import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      selectedPokemon: {name: "No Pokemon Selected", image:"https://via.placeholder.com/100"}
    }
  }
  
  handlePokemonClick=(pokemon)=>{
    this.setState({
      selectedPokemon: pokemon
    });
  }

  render(){

    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
      let { image, name, weight, height, hp, atk, def } = pokemon;
      return(
        <div 
            className="pokemon-item-container"
            onClick={()=>this.handlePokemonClick(pokemon)}
        >
            <img src={image} alt="Pokemon Image" />
            <div>Name: {name}</div>
            <div>Weight: {weight}</div>
            <div>Height: {height}</div>
            <div>Health: {hp}</div>
            <div>Attack: {atk}</div>
            <div>Defense: {def}</div>
        </div>
      )
    });

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>
        <div>
          <h3>Currently Selected Pokemon</h3>
          <img src={this.state.selectedPokemon.image} alt="Selected pokemon image" />
          <div>{this.state.selectedPokemon.name}</div>
        </div>
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
      </div>
    )
  }
}

export default App;