import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {


  let newUrl= url

  if(country){
    newUrl=`${url}/countries/${country}`
  }




  try {
    const { data } = await axios.get(newUrl);

    const someOtherData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    return someOtherData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const getData = data.map((dailyData) => ({
      confimed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return getData;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data:{countries}
    } = await axios.get(`${url}/countries`);

   return countries.map((country)=>country.name)
    // console.log(getCountries);
    // return getCountries;
  } catch (error) {
  
  }
};
