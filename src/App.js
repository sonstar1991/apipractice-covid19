import React, { Component } from "react";
import "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const getData = await fetchData();
    this.setState({ data: getData });
  }


  handleCountryChange= async(country)=>{
    const getData =await fetchData(country)

    console.log(getData)
    //set state
    this.setState({data:getData, country})
  }






  render() {
    const { data,country } = this.state;
    // console.log(data)
    return (
      <div className="App">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
