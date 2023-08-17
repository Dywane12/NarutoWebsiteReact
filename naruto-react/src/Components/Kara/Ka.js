import React from "react";
import '../Components.css';

const Ka = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            {
                props.images.map((image, index) => {
                    return(
                        <div key={index} className="component-images">
                            <img src={image} alt="" />
                        </div>
                    )
                })
            }
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
            <h4>Personal:</h4>
            {
                props.birthdate ? <p className="component-text">Birthdate: {props.birthdate}</p> : null
            }
            {
                props.bloodType ? <p className="component-text">Blood Type: {props.bloodType}</p> : null
            }
            {
                props.sex ? <p className="component-text">Gender: {props.sex}</p> : null
            }
            {
                props.clan ? <p className="ka-text">Clan: {props.clan}</p> : null
            }
            {
                props.titles ? <h4>Titles: </h4> : null
            }
            {
                props.titles ? props.titles.map((title, index) => {
                    return(
                        <div className="component-images">
                            <p key={index} className="component-text">{title}, </p>
                        </div>
                    )
                }) : null
            }
            {
                props.jutsu ? <h4>Jutsu: </h4> : null
            }
            {
                props.jutsu ? props.jutsu.map((j, index) => {
                    return(
                        <div className="component-images">
                            <p key={index} className="component-text">{j}, </p>
                        </div>
                    )
                }) : null
            }
            {
                props.natureType ? <h4>Nature Type: </h4> : null
            }
            {
                props.natureType ? props.natureType.map((nt, index) => {
                    return(
                        <div className="component-images">
                            <p key={index} className="component-text">{nt}, </p>
                        </div>
                    )
                }) : null
            }
        </div>
    )

}

export default Ka;