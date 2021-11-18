import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      teamList: [],
      teamWeight: 0,
      teamAtk: 0,
      teamHp: 0,
      teamDef: 0,
    }
  }

  handlePokemonClick = (pokemon)=>{
    this.setState({
      teamList: [...this.state.teamList, pokemon],
      // add to what's currently there, and add what you click on:
      teamweight: this.state.teamWeight + pokemon.weight,
    })
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

    let pokemonTeamElArr = this.state.teamList.map((pokemon)=>{
      return (
        <div className="pokemon-team-item-container">
          <img src={pokemon.image} alt="pokemon image" />
          <div>{pokemon.name}</div>
        </div>
      )
    })

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>

        <h2>Team List</h2>
          <div id="pokemon-team-container">
          { pokemonTeamElArr }
          </div>

        <h2>Pokédex</h2> 
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
      </div>
    )
  }
}

export default App;