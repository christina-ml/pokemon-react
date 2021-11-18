import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      teamList: [],
      
      teamName: 'N/A',
      trainerName: 'N/A',
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

  handleSubmit=(e)=>{
    e.preventDefault();
    alert("Submitted")
    // console.log("You have submitted your team details");
    // console.log(`Team Name: ${this.state.teamName}, Trainer Name: ${this.state.trainerName}`)
  }

  // handleTeamNameInput=(e)=>{
  //   this.setState({
  //     teamName: e.target.value,
  //   })
  // }

  // handleTrainerNameInput=(e)=>{
  //   this.setState({
  //     trainerName: e.target.value,
  //   })
  // }

  // handleGamesWonInput=(e)=>{
  //   this.setState({
  //     gamesWon: e.target.value,
  //   })
  // }

  // handleBadgesWonInput=(e)=>{
  //   this.setState({
  //     badgesWon: e.target.value,
  //   })
  // }

  /* One method for all of them, generically handleUserInput */
  handleUserInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
    // console.log(e.target.name)
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
          <div>Team Name: {this.state.teamName}</div>
          <div>Trainer Name: {this.state.trainerName}</div>
          <div>Games Won: {this.state.gamesWon}</div>
          <div>Badges Won: {this.state.badgesWon}</div>
        </div>
        <br />
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="team-name">Team Name</label>
          <input 
            onInput={this.handleUserInput} 
            value={this.state.teamName} 
            type="text" 
            name="teamName" 
            id="team-name" 
          />
          
          <br />
          <label htmlFor="trainer-name">Trainer Name</label>
          <input 
            onInput={this.handleUserInput} 
            value={this.state.trainerName} 
            type="text" 
            name="trainerName" 
            id="trainer-name"
          />
          
          <br />
          <label htmlFor="games-won">Games Won</label>
          <input 
            onInput={this.handleUserInput} 
            value={this.state.gamesWon} 
            type="number" 
            name="gamesWon" 
            id="games-won" 
          />

          <br />
          <label htmlFor="badges-won">Badges Won</label>
          <input 
            onInput={this.handleUserInput} 
            value={this.state.badgesWon} 
            type="number" 
            name="badgesWon" 
            id="badges-won" 
          />

          <br />
          <button type="submit">Submit</button>
        </form>
        
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