import React from "react";
import "./App.css";
import Geolocation from "./Geolocation";
import Performance from "./Performance";
import {Grid} from 'semantic-ui-react'

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
        <Geolocation />
        </Grid.Row>
        <Grid.Row>
        <Performance />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
