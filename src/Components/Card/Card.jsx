import React from "react";
import './Card.scss';


const Card = ({image, name, tagline, abv}) => {

    return (
        <div className="beerCard">
            <img className="beerCard__img"src={image} alt=""/>
            <h3 className="beerCard__title">{name}</h3>
            <p className="beerCard__abv">ABV {abv}%</p>
            <p className="beerCard__tagline">{tagline}</p>
        </div>
    )
}


export default Card;