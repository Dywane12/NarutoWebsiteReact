import React, { Component } from "react";
import axios from 'axios';
import Clan from "./Clan";
import '../Components.css';

class Clans extends Component {

    state = {
        clan: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/clan/search?name=${this.state.name}`)
        .then(response => {
            this.setState({clan: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        return(
            <div className="components">
                <img className="components-img" src="https://icinailsupply.com/cdn/shop/products/STK642.jpg?v=1638509481" alt="" />
                <div className="components-text">
                    <h1>Clans</h1>
                    <p>Seach for any clan you want within the naruto verse!!<br />Example: "Uzumaki", "Uchiha" etc.</p>
                    <p>You need to type the name correctly. For example: Hyūga <br /> You can copy ū, ō from here if you need them.</p>                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="Clan name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid clan! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.clan ? null : (<Clan 
                        name={this.state.clan.name}
                        characters={this.state.clan.characters}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Clans;