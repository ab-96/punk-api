import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
//import beers from "../../Data/beers";
import './Main.scss';

const Main = ({showData}) => {

    const beersArr = showData.map((beer, index) => {
        return <Card key={beer + index} name={beer.name} image={beer.image_url} tagline={beer.tagline} abv={beer.abv} info={beer.description} /> });
   

    return (
        <div className="main">
            {beersArr}
        </div>

        
    )
}

export default Main;


