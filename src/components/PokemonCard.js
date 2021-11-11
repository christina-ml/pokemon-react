import { Component } from "react";

class PokemonCard extends Component{
    constructor(){
        super();
    }

    render(){
        let { image, name, weight, height, hp, atk, def } = this.props.pokemon;
        return(
            <div className="pokemon-item-container">
                <img src={image} alt="Pokemon Image"/>
                <div>Name: {name}</div>
                <div>Weight: {weight}</div>
                <div>Height: {height}</div>
                <div>Health Points: {hp}</div>
                <div>Attack: {atk}</div>
                <div>Defense: {def}</div>
            </div>
        )
    }
}

export default PokemonCard;