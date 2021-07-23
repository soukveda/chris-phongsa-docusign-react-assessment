import React from "react";
import { CardContent, Grid } from "@material-ui/core";
import {
  AutomationSchoolContainer,
  AutomationTitle,
  AutomationText,
  AutomationButton,
  CustomBackground,
  CustomText,
  CustomTitle,
  InfoCard,
  CardTitle,
  CardText,
} from "./style";

export default function AutomationSchoolBenefits() {
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
        <Grid item>
          <CustomTitle>
            Some title Some title Some title Some title Some title
          </CustomTitle>
        </Grid>
        <Grid item xs={4}>
          <CustomText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
          </CustomText>
        </Grid>
        <Grid item>
          <AutomationSchoolContainer>
            <AutomationTitle>Automation School</AutomationTitle>
            <AutomationText>
              Automation School can help your software teams to learn and do
              Test Automation using a variety of tech stacks in API, UI, and
              Mobile Automation. please enter a few details about what you are
              looking for and we will get back to you within a business day.
            </AutomationText>
            <AutomationButton>
              <CustomText>Continue</CustomText>
            </AutomationButton>
          </AutomationSchoolContainer>
        </Grid>
        <Grid
          container
          item
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <CustomTitle>
              Benefits of Automation School Training Program
            </CustomTitle>
            <Grid item container justifyContent="center" alignItems="center">
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3} />
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3} />
              <Grid xs={3} />
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
                  </CardContent>
                </InfoCard>
              </Grid>
              <Grid xs={3}>
                <InfoCard>
                  <CardContent>
                    <CardTitle>Benefits</CardTitle>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </CardText>
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
