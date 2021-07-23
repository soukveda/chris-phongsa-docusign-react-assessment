import React from "react";
import { Grid } from "@material-ui/core";
import {
  AutomationSchoolContainer,
  AutomationTitle,
  AutomationText,
  AutomationButton,
  CustomBackground,
  CustomText,
  CustomTitle,
} from "./style";

export default function AutomationSchool() {
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
      </Grid>
    </CustomBackground>
  );
}
