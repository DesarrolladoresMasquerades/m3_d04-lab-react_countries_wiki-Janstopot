import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function CountriesList(props) {
  //console.log(props)
  return (
    <div>
      {
        <Link to={props.CountriesList.alpha3Code}>
          {props.CountriesList.name}
          <img
            src={`https://flagpedia.net/data/flags/w580/${props.CountriesList.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="100px"
            height="auto"
          />
        </Link>
      }
    </div>
  );
}

export default CountriesList;
