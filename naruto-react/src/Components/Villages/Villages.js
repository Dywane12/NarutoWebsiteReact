import React, { Component } from "react";
import axios from 'axios';
import Village from './Village';
import '../Components.css';

class Villages extends Component {

    state = {
        village: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/village/search?name=${this.state.name}`)
        .then(response => {
            this.setState({team: response.data,
            error: false})
            console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        return(
            <div className="components">
                <img className="components-img" src="https://wallpapercave.com/wp/wp5845271.jpg" alt="" />
                <div className="components-text">
                    <h1>Villages</h1>
                    <p>Seach for any village you want within the naruto verse!!<br />Example: "Daidai Village", "Konohagakure" etc.</p>
                    <p>You need to type the name correctly. For example: Daidai Village <br /> You can copy ū, ō from here if you need them.</p>                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="Village name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid village! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.team ? null : (<Village 
                        name={this.state.team.name}
                        characters={this.state.team.characters}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Villages;