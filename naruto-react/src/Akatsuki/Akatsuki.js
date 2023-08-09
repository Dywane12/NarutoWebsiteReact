import React, { Component } from "react";
import axios from 'axios';
import Aka from "./Aka";
import './Akatsuki.css';


class Akatsuki extends Component {

    state = {
        aka: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/akatsuki/search?name=${this.state.name}`)
        .then(response => {
            this.setState({aka: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        // console.log(this.state.characters)
        return(
            <div className="akatsuki">
                <img className="akatsuki-img" src="https://cdn.wallpapersafari.com/34/30/wuJU1A.png" alt="" />
                <div className="akatsuki-text">
                    <h1>Akatsuki</h1>
                    <p>Seach for any character from the Akatsuki that you want within the naruto verse!!<br />Use FULL NAME to search<br />Example: "Itachi Uchiha", "Black Zetsu" etc.</p>
                    <p>You need to type the name correctly. For example: Itachi Uchiha <br /> You can copy ū, ō from here if you need them.</p>
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
                        !this.state.aka ? null : (<Aka 
                        name={this.state.aka.name}
                        anime={this.state.aka.debut.anime}
                        appearsIn={this.state.aka.debut.appearsIn}
                        game={this.state.aka.debut.game}
                        manga={this.state.aka.debut.manga}
                        movie={this.state.aka.debut.movie}
                        novel={this.state.aka.debut.novel}
                        images={this.state.aka.images}
                        jutsu={this.state.aka.jutsu}
                        natureType={this.state.aka.natureType}
                        birthdate={this.state.aka.personal.birthdate}
                        bloodType={this.state.aka.personal.bloodType}
                        sex={this.state.aka.personal.sex}
                        clan={this.state.aka.personal.clan}
                        titles={this.state.aka.personal.titles}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Akatsuki;