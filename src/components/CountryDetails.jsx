import { useState } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const { name, alpha3Code, capital, area, borders, alpha2Code } =
    props.country;
 

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`}
        alt=""
        width="100px"
        height="auto"
      />
      <h1>{name}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td width="30%">Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((border) => {

                  return (
                    <li>
                      <Link to={'/' + border}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
