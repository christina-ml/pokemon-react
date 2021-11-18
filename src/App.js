import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      teamList: [],
    }
  }
  
  /*
  - Our way of copying & creating a new array - using the spread operator. And then add our `pokemon`.
  - take every element and put it inside of a new array, and add our pokemon at the end of it.
  - spread operator is going to take each pokemon and add them into the array like this: [{}{}{}]
  */
  handlePokemonClick=(pokemon)=>{
    let newArr = [...this.state.teamList, pokemon]

    this.setState({
      teamList: newArr,
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