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
    };
  }

  async componentDidMount() {
    const getData = await fetchData();
    this.setState({ data: getData });
  }

  render() {
const {data} = this.state
// console.log(data)
    return (
      <div className="App">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
