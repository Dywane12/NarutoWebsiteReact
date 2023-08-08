import React, { Component } from "react";
import axios from 'axios';
import Aka from "./Aka";
import './Akatsuki.css';


class Akatsuki extends Component {

    state = {
        all: null,
        aka: null,
        name: '',
        error: false
    };

    componentDidMount() {
        axios.get(`/api/akatsuki`)
        .then(response => {
            this.setState({all: response.data});
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

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
            <div className="characters">
                <img className="characters-img" src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2022/04/naruto-characters-header.jpg" alt="" />
                <div className="characters-text">
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
                        !this.state.all && this.state.aka ? null : <h4>General information:</h4> 
                    }
                    {
                            !this.state.all && this.state.aka ? this.state.all.akatsuki.map((ch, index) => {
                                return(
                                    <div className="character-images">
                                        <p className="">{ch.name}</p>
                                        <p key={index} className="character-text">{j}, </p>
                                    </div>
                                )
                            }) : null
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
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Akatsuki;