import React, { Component } from "react";
import axios from 'axios';
import Ka from './Ka';
import './Kara.css';


class Kara extends Component {

    state = {
        ka: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/kara/search?name=${this.state.name}`)
        .then(response => {
            this.setState({ka: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        // console.log(this.state.characters)
        return(
            <div className="kara">
                <img className="kara-img" src="https://i.pinimg.com/originals/3e/9b/0a/3e9b0a4bd32feecac4a64ab901657d99.jpg" alt="" />
                <div className="kara-text">
                    <h1>Kara</h1>
                    <p>Seach for any character from Kara that you want within the naruto verse!!<br />Use FULL NAME to search<br />Example: "Boro", "Jigen" etc.</p>
                    <p>You need to type the name correctly. For example: Jigen <br /> You can copy ū, ō from here if you need them.</p>
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
                        !this.state.ka ? null : (<Ka 
                        name={this.state.ka.name}
                        anime={this.state.ka.debut.anime}
                        appearsIn={this.state.ka.debut.appearsIn}
                        game={this.state.ka.debut.game}
                        manga={this.state.ka.debut.manga}
                        movie={this.state.ka.debut.movie}
                        novel={this.state.ka.debut.novel}
                        images={this.state.ka.images}
                        jutsu={this.state.ka.jutsu}
                        natureType={this.state.ka.natureType}
                        birthdate={this.state.ka.personal.birthdate}
                        bloodType={this.state.ka.personal.bloodType}
                        sex={this.state.ka.personal.sex}
                        clan={this.state.ka.personal.clan}
                        titles={this.state.ka.personal.titles}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default Kara;