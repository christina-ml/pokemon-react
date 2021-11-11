import { Component } from "react";

class PokemonCard extends Component{
    constructor(){
        super();
    }

    handlePokemonClick=(name)=>{
        console.log(name);
    }

    render(){
        let { image, name, weight, height, hp, atk, def } = this.props.pokemon;
        return(
            // wrap the onClick in an arrow function, and then invoke it. Can pass information in it.
            // allows us to pass data, on click.
            <div 
                className="pokemon-item-container"
                onClick={()=>this.props.handlePokemonClick(this.props.pokemon)}
            >
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