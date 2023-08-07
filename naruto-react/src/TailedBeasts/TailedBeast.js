import React from "react";
import './TailedBeast.css';

const TailedBeast = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            <img src={props.image} alt="" />
            <h4>Debut:</h4>
            {
                props.anime ? <p className="tailed-beast-text">Anime: {props.anime}</p> : null
            }
            {
                props.appearsIn ? <p className="tailed-beast-text">Appears in: {props.appearsIn}</p> : null
            }            
            {
                props.game ? <p className="tailed-beast-text">Game: {props.game}</p> : null
            }
            {
                props.manga ? <p className="tailed-beast-text">Manga: {props.manga}</p> : null
            }
            {
                props.movie ? <p className="tailed-beast-text">Movie: {props.movie}</p> : null
            }
            {
                props.novel ? <p className="tailed-beast-text">Novel: {props.novel}</p> : null
            }
            <h4>Family:</h4>
            {
                props.creator ? <p className="tailed-beast-text">Creator: {props.creator}</p> : null
            }
            {
                props.sibling ? <p className="tailed-beast-text">Sibling: {props.sibling}</p> : null
            }
            {
                props.kekkeiGenkai ?<h4>Kekkei Genkai:</h4> : null 
            }
            {
                props.kekkeiGenkai ? <p className="tailed-beast-text">{props.kekkeiGenkai}</p> : null
            }
            <h4>Jinchūriki:</h4>
            {
                props.jinchūriki ? props.jinchūriki.map((j, index) => {
                    return(
                        <div className="tailed-beast-images">
                            <p key={index} className="tailed-beast-text">{j}, </p>
                        </div>
                    )
                }) : null
            }
            <h4>Jutsu:</h4>
            {
                props.jutsu ? props.jutsu.map((j, index) => {
                    return(
                        <div className="tailed-beast-images">
                            <p key={index} className="tailed-beast-text">{j}, </p>
                        </div>
                    )
                }) : null
            }
        </div>
    )

}

export default TailedBeast;