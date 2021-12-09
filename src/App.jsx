import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import React, {useState, useEffect} from 'react';

function App() {
   const [showData, setShowData] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
       const URL = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
       fetch(URL).then(response => {
           return response.json();
       }).then(beerObject => {
           setShowData(beerObject);
       });

   }, [searchTerm]);

   const handleInput = event => {
     const inputValue = event.target.value.toLowerCase();
     setSearchTerm(inputValue);
     console.log(inputValue);
   };

   const singleBeer = showData.filter(beer => {
      const name = beer.name.toLowerCase();
   
      return name.includes(searchTerm)
 
   })

   console.log(singleBeer)



   return (
      <div className="app">
         <Navbar handleInput={handleInput} searchTerm={searchTerm} showData={showData}/>
         <Main showData={singleBeer}/>
      </div>
   )
}


export default App;


