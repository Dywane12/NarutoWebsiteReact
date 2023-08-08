import React from "react";
import './Character.css';

const Character = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            {
                props.images.map((image, index) => {
                    return(
                        <div key={index} className="character-images">
                            <img src={image} alt="" />
                        </div>
                    )
                })
            }
            <h4>Debut:</h4>
            {
                props.anime ? <p className="character-text">Anime: {props.anime}</p> : null
            }
            {
                props.appearsIn ? <p className="character-text">Appears in: {props.appearsIn}</p> : null
            }            
            {
                props.game ? <p className="character-text">Game: {props.game}</p> : null
            }
            {
                props.manga ? <p className="character-text">Manga: {props.manga}</p> : null
            }
            {
                props.movie ? <p className="character-text">Movie: {props.movie}</p> : null
            }
            {
                props.novel ? <p className="character-text">Novel: {props.novel}</p> : null
            }
        </div>
    )

}

export default Character;