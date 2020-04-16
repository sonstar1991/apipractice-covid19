import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setFetchedCountries ] = useState([]);

  // const fetchAPI= async function (){
  //   setFetchCountries(await fetchCountries());
  // }
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);


  return (
    <FormControl >
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
