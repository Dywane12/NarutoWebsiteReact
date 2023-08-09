import React from "react";
import './Ka.css';

const Ka = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            {
                props.images.map((image, index) => {
                    return(
                        <div key={index} className="ka-images">
                            <img src={image} alt="" />
                        </div>
                    )
                })
            }
            <h4>Debut:</h4>
            {
                props.anime ? <p className="ka-text">Anime: {props.anime}</p> : null
            }
            {
                props.appearsIn ? <p className="ka-text">Appears in: {props.appearsIn}</p> : null
            }            
            {
                props.game ? <p className="ka-text">Game: {props.game}</p> : null
            }
            {
                props.manga ? <p className="ka-text">Manga: {props.manga}</p> : null
            }
            {
                props.movie ? <p className="ka-text">Movie: {props.movie}</p> : null
            }
            {
                props.novel ? <p className="ka-text">Novel: {props.novel}</p> : null
            }
            <h4>Personal:</h4>
            {
                props.birthdate ? <p className="ka-text">Birthdate: {props.birthdate}</p> : null
            }
            {
                props.bloodType ? <p className="ka-text">Blood Type: {props.bloodType}</p> : null
            }
            {
                props.sex ? <p className="ka-text">Gender: {props.sex}</p> : null
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
                        <div className="ka-images">
                            <p key={index} className="ka-text">{title}, </p>
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
                        <div className="ka-images">
                            <p key={index} className="ka-text">{j}, </p>
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
                        <div className="ka-images">
                            <p key={index} className="ka-text">{nt}, </p>
                        </div>
                    )
                }) : null
            }
        </div>
    )

}

export default Ka;