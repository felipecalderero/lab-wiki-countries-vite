import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const countryData = await response.json();
        setCountries(countryData);
        setFetching(false);
      }
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {fetching && <p>Loading ...</p>}

      {countries.map((country) => {
        return (
          <div key={country.name.common} className="card">
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
