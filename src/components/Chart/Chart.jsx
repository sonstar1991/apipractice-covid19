import React, { useEffect, useState } from "react";

import { fetchDailyData } from "../../api";
import { Line,  Bar } from "react-chartjs-2";
import { Container } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
  //global
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

  
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confimed }) => confimed),
            label: "Infected",
            borderColor: "green",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
      />
  ) : null;


  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );
   

  return <div className={Container} >
      
      {lineChart}
      {barChart}

  </div>;
};

export default Chart;
