import React, { Component } from "react";
import axios from 'axios';
import Character from "./Character";
import '../Components.css';

class Characters extends Component {

    state = {
        character: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/character/search?name=${this.state.name}`)
        .then(response => {
            this.setState({character: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        // console.log(this.state.characters)
        return(
            <div className="components">
                <img className="components-img" src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2022/04/naruto-characters-header.jpg" alt="" />
                <div className="components-text">
                    <h1>Characters</h1>
                    <p>Seach for any character you want within the naruto verse!!<br />Use FULL NAME to search<br />Example: "Naruto Uzumaki", "Sasuke Uchiha", "Tsunade" etc.</p>
                    <p>You need to type the name correctly. For example: Hinata Hyūga <br /> You can copy ū, ō from here if you need them.</p>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="FULL character name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid character! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.character ? null : (<Character 
                        name={this.state.character.name}
                        anime={this.state.character.debut.anime}
                        appearsIn={this.state.character.debut.appearsIn}
                        game={this.state.character.debut.game}
                        manga={this.state.character.debut.manga}
                        movie={this.state.character.debut.movie}
                        novel={this.state.character.debut.novel}
                        images={this.state.character.images}
                        jutsu={this.state.character.jutsu}
                        natureType={this.state.character.natureType}
                        birthdate={this.state.character.personal.birthdate}
                        bloodType={this.state.character.personal.bloodType}
                        sex={this.state.character.personal.sex}
                        clan={this.state.character.personal.clan}
                        titles={this.state.character.personal.titles}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Characters;