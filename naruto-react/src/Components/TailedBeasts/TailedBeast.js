import React from "react";
import '../Components.css';

const TailedBeast = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            <img src={props.image} alt="" />
            <h4>Debut:</h4>
            {
                props.anime ? <p className="component-text">Anime: {props.anime}</p> : null
            }
            {
                props.appearsIn ? <p className="component-text">Appears in: {props.appearsIn}</p> : null
            }            
            {
                props.game ? <p className="component-text">Game: {props.game}</p> : null
            }
            {
                props.manga ? <p className="component-text">Manga: {props.manga}</p> : null
            }
            {
                props.movie ? <p className="component-text">Movie: {props.movie}</p> : null
            }
            {
                props.novel ? <p className="component-text">Novel: {props.novel}</p> : null
            }
            <h4>Family:</h4>
            {
                props.creator ? <p className="component-text">Creator: {props.creator}</p> : null
            }
            {
                props.sibling ? <p className="component-text">Sibling: {props.sibling}</p> : null
            }
            {
                props.kekkeiGenkai ?<h4>Kekkei Genkai:</h4> : null 
            }
            {
                props.kekkeiGenkai ? <p className="component-text">{props.kekkeiGenkai}</p> : null
            }
            <h4>Jinchūriki:</h4>
            {
                props.jinchūriki ? props.jinchūriki.map((j, index) => {
                    return(
                        <div className="component-images">
                            <p key={index} className="component-text">{j}, </p>
                        </div>
                    )
                }) : null
            }
            <h4>Jutsu:</h4>
            {
                props.jutsu ? props.jutsu.map((j, index) => {
                    return(
                        <div className="component-images">
                            <p key={index} className="component-text">{j}, </p>
                        </div>
                    )
                }) : null
            }
        </div>
    )

}

export default TailedBeast;