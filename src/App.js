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
    /* Add pokemon images dynamically */
    // let pokemonElArr = this.state.pokemonList.map((pokemonItem) => {
    //   return (
    //     <img src={pokemonItem.image} alt="Pokemon Image" />
    //   )
    // });

    /* Add pokemon names dynamically as list items in JSX */
    let pokemonListItem = this.state.pokemonList.map((pokemonItem) => {
      return (
        <div>
          <li>{pokemonItem.name}</li>
        </div>
      )
    })

    return (
      <div className="app" id="app-container">
        <h1>Pokémon React Code-Along</h1>
        <ul>
          <li>{pokemonListItem}</li>
        </ul>
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