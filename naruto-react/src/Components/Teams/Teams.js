import React, { Component } from "react";
import axios from 'axios';
import Team from './Team';
import '../Components.css';

class Teams extends Component {

    state = {
        team: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/team/search?name=${this.state.name}`)
        .then(response => {
            this.setState({team: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        return(
            <div className="components">
                <img className="components-img" src="https://wallpapers.com/images/hd/naruto-characters-64pjyoj5g8xfatla.jpg" alt="" />
                <div className="components-text">
                    <h1>Teams</h1>
                    <p>Seach for any team you want within the naruto verse!!<br />Example: "Analysis Team", "Team 7" etc.</p>
                    <p>You need to type the name correctly. For example: Team 7 <br /> You can copy ū, ō from here if you need them.</p>                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="Team name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid team! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.team ? null : (<Team 
                        name={this.state.team.name}
                        characters={this.state.team.characters}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Teams;