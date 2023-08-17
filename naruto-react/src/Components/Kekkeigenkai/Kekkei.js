import React from "react";
import '../Components.css';

const Kekkei = (props) => {

    return(
        <div>
            <h4>Name: {props.name}</h4>
            <h4>Characters: </h4>
            {
                props.characters.map((character, index) => {
                    return (
                        <div key={index} className="component-images">
                            <p>{character.name}</p>
                            <img src={character.images[0]} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Kekkei;