import React from "react";
import './Aka.css';

const Aka = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            {
                props.images.map((image, index) => {
                    return(
                        <div key={index} className="aka-images">
                            <img src={image} alt="" />
                        </div>
                    )
                })
            }
            <h4>Debut:</h4>
            {
                props.anime ? <p className="aka-text">Anime: {props.anime}</p> : null
            }
            {
                props.appearsIn ? <p className="aka-text">Appears in: {props.appearsIn}</p> : null
            }            
            {
                props.game ? <p className="aka-text">Game: {props.game}</p> : null
            }
            {
                props.manga ? <p className="aka-text">Manga: {props.manga}</p> : null
            }
            {
                props.movie ? <p className="aka-text">Movie: {props.movie}</p> : null
            }
            {
                props.novel ? <p className="aka-text">Novel: {props.novel}</p> : null
            }
            <h4>Personal:</h4>
            {
                props.birthdate ? <p className="aka-text">Birthdate: {props.birthdate}</p> : null
            }
            {
                props.bloodType ? <p className="aka-text">Blood Type: {props.bloodType}</p> : null
            }
            {
                props.sex ? <p className="aka-text">Gender: {props.sex}</p> : null
            }
            {
                props.clan ? <p className="aka-text">Clan: {props.clan}</p> : null
            }
            {
                props.titles ? <h4>Titles: </h4> : null
            }
            {
                props.titles ? props.titles.map((title, index) => {
                    return(
                        <div className="aka-images">
                            <p key={index} className="aka-text">{title}, </p>
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
                        <div className="aka-images">
                            <p key={index} className="aka-text">{j}, </p>
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
                        <div className="aka-images">
                            <p key={index} className="aka-text">{nt}, </p>
                        </div>
                    )
                }) : null
            }
        </div>
    )

}

export default Aka;