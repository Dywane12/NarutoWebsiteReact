import React, { Component } from "react";
import axios from 'axios';
import TailedBeast from './TailedBeast';
import '../Components.css';

class TailedBeasts extends Component {

    state = {
        tailedBeast: null,
        name: '',
        error: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/api/tailed-beast/search?name=${this.state.name}`)
        .then(response => {
            this.setState({tailedBeast: response.data,
            error: false})
            // console.log(response);
        }).catch((err) => {
            this.setState({error: true})
        })
    }

    render() {
        return(
            <div className="components">
                <img className="components-img" src="https://wallpapercave.com/wp/wp2806596.jpg" alt="" />
                <div className="components-text">
                    <h1>Tailed Beasts</h1>
                    <p>Seach for any Tailed Beast you want within the naruto verse!!<br />Example: "Shukaku", "Kurama" etc.</p>
                    <p>You can copy ū, ō from here if you need them.</p>                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => {this.setState({name: e.target.value})}}
                            placeholder="Tailed Beast name" 
                            className="input-field"
                        />
                        <input 
                            type="submit" 
                            value="Search"
                            className="submit-btn" 
                        />
                    </form>
                    {
                        this.state.error ? <p>Invalid Tailed Beast! Please follow the example above!</p> : null
                    }
                    {
                        !this.state.tailedBeast ? null : (<TailedBeast 
                        name={this.state.tailedBeast.name}
                        image={this.state.tailedBeast.images[0]}
                        anime={this.state.tailedBeast.debut.anime}
                        appearsIn={this.state.tailedBeast.debut.appearsIn}
                        game={this.state.tailedBeast.debut.game}
                        manga={this.state.tailedBeast.debut.manga}
                        movie={this.state.tailedBeast.debut.movie}
                        novel={this.state.tailedBeast.debut.novel}
                        creator={this.state.tailedBeast.family.creator}
                        sibling={this.state.tailedBeast.family.sibling}
                        jinchūriki={this.state.tailedBeast.personal.jinchūriki}
                        kekkeiGenkai={this.state.tailedBeast.personal.kekkeiGenkai}
                        jutsu={this.state.tailedBeast.jutsu}
                        />) 
                    }
                </div>
            </div>
        )
    }
}

export default TailedBeasts;