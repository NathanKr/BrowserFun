import React, { useState } from "react";
import { Button, Grid ,Table , Label} from "semantic-ui-react";
import moment from "moment";

const Performance = () => {
  const [timing, setTiming] = useState(null);
  const getPerf = () => {
    setTiming(window.performance.timing);
  };

  const color='orange'
  const getTime = unixTime => moment(unixTime).format("YYYY-MM-DD h:mm:ss a");

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Button basic color={color} onClick={getPerf}>
            Window performance
          </Button>
        </Grid.Row>
        <Grid.Row>
        <Table celled inverted color={color}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label>connectStart</Label>
                </Table.Cell>
                <Table.Cell>{timing ? getTime(timing.connectStart) : ''}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>connectEnd</Label>
                </Table.Cell>
                <Table.Cell>{timing ? getTime(timing.connectEnd) : ''}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Performance;
