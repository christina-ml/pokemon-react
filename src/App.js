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
    console.log(this.state.pokemonList);

    let pokemonElArr = this.state.pokemonList.map((pokemonItem) => {
      return (
        <img src={pokemonItem.image} alt="Pokemon Image" />
      )
    });

    // console.log("pokemonElArr", pokemonElArr); // changed from array of objects. now an array of elements.
    // [
    //   {
    //     name: "Bulbasaur"
    //   },
    //   {
    //     name: "Ivysaur"
    //   }
    // ]

    // [
    //   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />,
    //   <img src="" alt="" />,
    // ]

    return (
      <div>
        <h1>Pokémon React Code-Along</h1>
        { pokemonElArr }
        <ul>

        </ul>
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