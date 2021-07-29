import React, { useEffect, useState } from "react";
import { CardContent, Grid } from "@material-ui/core";
import {
  CustomBackground,
  CustomTitle,
  InfoCard,
  CardTitle,
  CardText,
} from "./style";
import FirebaseInstance from "../../api/FirebaseInstance";
import AutomationSchool from "../AutomationSchool/AutomationSchool";

export default function AutomationSchoolBenefits(props) {
  const [benefitTitle, setBenefitTitle] = useState("Default Title");
  const [benefitDescription, setBenefitDescription] = useState("Default Description");

  useEffect(() => {
    FirebaseInstance.get("/automationBenefits.json")
      .then((resp) => {
        setBenefitTitle(resp.data.title);
        const queriedDesc = Object.values(resp.data).filter((desc) => {
          return typeof desc === "object";
        });
        setBenefitDescription(queriedDesc);
      })
      .catch();
  }, []);

  return (
    <CustomBackground>
      <Grid
        container
        item
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <AutomationSchool likes={props.likes}/>
        <Grid
          container
          item
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <CustomTitle>{benefitTitle}</CustomTitle>
            <Grid item container justifyContent="center" alignItems="center">
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[0].name}</CardTitle>
                    <CardText>{benefitDescription[0].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[1].name}</CardTitle>
                    <CardText>{benefitDescription[1].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3} />
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[2].name}</CardTitle>
                    <CardText>{benefitDescription[2].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[3].name}</CardTitle>
                    <CardText>{benefitDescription[3].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3} />
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[4].name}</CardTitle>
                    <CardText>{benefitDescription[4].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>{benefitDescription[5].name}</CardTitle>
                    <CardText>{benefitDescription[5].description}</CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomBackground>
  );
}
