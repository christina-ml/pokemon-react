import { Component } from "react";

class Form extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>

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
        )
    }
}

export default Form;


/*
We have:
this.handleSubmit
this.handleUserInput
this.state.teamName

etc.. 
We could pass all these down as props.
*/