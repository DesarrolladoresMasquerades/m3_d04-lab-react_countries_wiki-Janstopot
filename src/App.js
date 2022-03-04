// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesJson from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesJson);
  //console.log(countries)

  return (
    <div className="App">
      <Navbar />

      {countries.map((country) => {
        return (
          <div>


            <CountriesList CountriesList={country} />

            
            <Routes>
              <Route path={"/" + country.alpha3Code} element={<CountryDetails country={country} />} />
            </Routes>


          </div>
        );
      })}
    </div>
  );
}
export default App;
