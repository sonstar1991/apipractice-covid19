import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
//   console.log(confirmed);
// console.log(lastUpdate)
  if (!confirmed) {
    return "loading.........";
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Isssues
            </Typography>
            <Typography color="textSecondary">Infected</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="h5" component="h2">
              
              {lastUpdate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovery
            </Typography>
            <Typography color="textSecondary">Deaths</Typography>
            <Typography variant="h5" component="h2">
              {recovered.value}
            </Typography>
            <Typography variant="body2" component="h2">
            {lastUpdate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid container spacing={3} justify="center">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="h5" component="h2">
             {deaths.value}
            </Typography>
            <Typography variant="body2" component="h2">
            {lastUpdate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Cards;
