import React, { useState, useEffect } from "react";
import { CardContent, Grid } from "@material-ui/core";
import { InfoCard, CardTitle, CardText } from "./style";
import FirebaseInstance from "../../api/FirebaseInstance";

export default function Scheduling(props) {
  const [schedulingTitle, setSchedulingTitle] = useState("Default Title");
  const [schedulingDescription, setSchedulingDescription] = useState(
    "Default Description"
  );

  useEffect(() => {
    FirebaseInstance.get("/scheduling.json")
      .then((resp) => {
        const queriedTitle = [];
        const queriedDesc = [];
        Object.values(resp.data).forEach((item) => {
          queriedTitle.push(item.name);
        });
        Object.values(resp.data).forEach((item) => {
          queriedDesc.push(item.description);
        });

        setSchedulingTitle(queriedTitle);
        setSchedulingDescription(queriedDesc);
      })
      .catch();
  }, []);

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
            <CardTitle>{schedulingTitle[0]}</CardTitle>
            <CardText>{schedulingDescription[0]}</CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid item xs={3}>
        <InfoCard>
          <CardContent>
            <CardTitle>{schedulingTitle[1]}</CardTitle>
            <CardText>{schedulingDescription[1]}</CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid item xs={3}>
        <InfoCard>
          <CardContent>
            <CardTitle>{schedulingTitle[2]}</CardTitle>
            <CardText>{schedulingDescription[2]}</CardText>
          </CardContent>
        </InfoCard>
      </Grid>
      <Grid xs={1} />
    </Grid>
  );
}
