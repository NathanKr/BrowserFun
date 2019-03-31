import React, { useState } from "react";
import { Button, Label, Grid, Table } from "semantic-ui-react";

const Geolocation = () => {
  const [coords, setCoords] = useState(null);

  const getGeo = () => {
    const success = pos => setCoords(pos.coords);
    const error = err => console.log(err);
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Button basic color="blue" onClick={getGeo}>
            Geolocation
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label>Latitude</Label>
                </Table.Cell>
                <Table.Cell>{coords ? coords.latitude : ''}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Longitude</Label>
                </Table.Cell>
                <Table.Cell>{coords ? coords.longitude : ''}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Geolocation;
