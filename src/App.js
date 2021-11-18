import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      teamList: [],
      
      teamName: '',
      trainerName: '',
      gamesWon: 0,
      badgesWon: 0, 

      teamWeight: 0,
      teamAtk: 0,
      teamHp: 0,
      teamDef: 0,
    }
  }

  handlePokemonClick = (pokemon)=>{
    // if more than 6 pokemon on team
    if (this.state.teamList.length >= 6) {
      return;
    }
    this.setState({
      teamList: [...this.state.teamList, pokemon],
      // add to what's currently there, and add what you click on:
      teamweight: this.state.teamWeight + pokemon.weight,
      teamAtk: this.state.teamAtk + pokemon.atk,
      teamHp: this.state.teamHp + pokemon.hp,
      teamDef: this.state.teamDef + pokemon.def,
    })
  }

  render(){
    let pokemonNameElArr = this.state.pokemonList.filter((poke)=>poke.id < 20).map((pokemon)=>{
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
      return(
        <div className="pokemon-team-item-container">
          <div>{ pokemon.name }</div>
          <img src={ pokemon.image } alt="pokemon image" />
          <div>Hp: { pokemon.hp }</div>
        </div>
      )
    })

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>

        <h2>Team Details</h2>

        <div>
          <div>Team Name</div>
          <div>Trainer Name</div>
          <div>Games Won</div>
          <div>Badges Won</div>
          <div>Games Lost</div>
          <div>Home Gym</div>
        </div>
        
        <h3>Pokemon in team</h3>
        <div id="pokemon-team-container">
          { pokemonTeamElArr }
        </div>
        <h3>Stats</h3>
        <div>
          <div>Weight: { this.state.teamWeight }</div>
          <div>Health Points: { this.state.teamHp }</div>
          <div>Attack: { this.state.teamAtk }</div>
          <div>Defense: { this.state.teamDef }</div>
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