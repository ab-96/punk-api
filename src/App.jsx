import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import React, {useState, useEffect} from 'react';

function App() {
   const [showData, setShowData] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
       const URL = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
       fetch(URL).then(response => {
           return response.json();
       }).then(beerObject => {
          console.log(beerObject)
           setShowData(beerObject);
       });

   }, []);

   const handleInput = event => {
     const cleanInput = event.target.value.toLowerCase();
     setSearchTerm(cleanInput);
     console.log(cleanInput)
   };





   return (
      <div className="app">
         <Navbar handleInput={handleInput} searchTerm={searchTerm}/>
         <Main showData={showData}/>
      </div>
   )
}


export default App;


