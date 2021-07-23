import React from "react";
import { CardContent, Grid } from "@material-ui/core";
import { InfoCard, CardTitle, CardText } from "./style";

export default function Scheduling() {
  return (
    <Grid
      container
      item
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={1} />
      <Grid item xs={3}>
        <InfoCard>
          <CardContent>
            <CardTitle>Live Online</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid item xs={3}>
        <InfoCard>
          <CardContent>
            <CardTitle>Flexible Schedule</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid item xs={3}>
        <InfoCard>
          <CardContent>
            <CardTitle>Something</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid xs={1} />
    </Grid>
  );
}
