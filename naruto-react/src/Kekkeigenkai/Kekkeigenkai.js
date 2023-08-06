import React, { Component } from "react";
import axios from 'axios';
import Kekkei from './Kekkei';
import './KekkeiGenkai.css';


class KekkeiGenkai extends Component {

    state = {
        kekkeiGenkai: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/kekkei-genkai/search?name=${this.state.name}`)
        .then(response => {
            this.setState({kekkeiGenkai: response.data,
            error: false})
            console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        return(
            <div className="kekkei-genkai">
                <img className="kekkei-genkai-img" src="https://cdn.wallpapersafari.com/97/14/OzeXo2.jpg" alt="" />
                <div className="kekkei-genkai-text">
                    <h1>Kekkei Genkai</h1>
                    <p>Seach for any Kekkei Genkai you want within the naruto verse!!<br />Example: "Byakugan", "Sharingan" etc.</p>
                    <p>You need to type the name correctly. For example: Jōgan <br /> You can copy ū, ō from here if you need them.</p>                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="Kekkei Genkai name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid Kekkei Genkai! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.kekkeiGenkai ? null : (<Kekkei 
                        name={this.state.kekkeiGenkai.name}
                        characters={this.state.kekkeiGenkai.characters}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default KekkeiGenkai;