import React, { useEffect, useState } from "react";
import "./FilterList.scss";


const FilterList = ({showData, abvFilter}) => {
  const [checked, setChecked] = useState(false)


  //event.target.checked -> for checked boxes to check if they clicked -> use if statementts 


  const toggleABV = () => {

    if (setChecked(!checked)) {

    }

   

  }


  return (
    <div className="filter">
      <div className="filter__item">
        <label>High ABV (&gt; 6.0%)</label>
        <input type="checkbox" value="abv" onClick={toggleABV}></input>
      </div>

      <div className="filter__item">
        <label>Classic Range</label>
        <input type="checkbox" value="cr"></input>
      </div>

      <div className="filter__item">
        <label>Acidic ({'>'} 6.0%)</label>
        <input type="checkbox" value="ah"></input>
      </div>

    </div>

  )
}


export default FilterList;