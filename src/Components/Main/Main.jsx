import React from "react";
import Card from "../Card/Card";
import beers from "../../Data/beers";
import './Main.scss';

const Main = () => {


    return (
        <div className="main">

            
              {beers.map((beer, index) => {
                    return <Card key={beer + index} name={beer.name} image={beer.image_url} tagline={beer.tagline} abv={beer.abv}/>
                })

            }
        </div>
    )
}


export default Main;




// {fetch("https://api.punkapi.com/v2/beers").then(response => {
//                 console.log(response)
//                 return response.json()
//             }).then(beerObject => {}