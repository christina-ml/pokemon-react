import { Component } from "react";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            teamName: 'N/A',
            trainerName: 'N/A',
            gamesWon: 0,
            badgesWon: 0,
        }
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

    /* 
    - One method for all of them, generically handleUserInput 
    - your name must match exactly what's in your state.
    - To have a dynamic key, use square brackets. This was in the Skills Lab - how to create a dynamic key and an object.
    */
    handleUserInput=(e)=>{
        this.setState({
        [e.target.name]: e.target.value,
        })
    }

    /* Passing in these 4 things as arguments into handleSubmit */
    render(){
        return(
            <form onSubmit={(e)=>this.props.handleSubmit(e, this.state.teamName, this.state.trainerName, this.state.gamesWon, this.state.badgesWon)}>

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

Destructuring could be useful too, but let's keep it simple for now & use this.props...
*/