import React from "react";
import { Grid } from "@material-ui/core";
import { CustomButton, CustomContainer, CustomText } from "./style";
import AutomationNavbar from "../AutomationNavbar/AutomationNavbar";

export default function Header() {
  return (
    <CustomContainer maxWidth="lg">
      <Grid container direction="column">
        <Grid item container justifyContent="center">
          <AutomationNavbar />
        </Grid>
        <Grid item>
          <CustomText>Fully remote instructor-led</CustomText>
          <CustomText>
            Corporate Training in <u>Test Automation for QA teams</u>
          </CustomText>
          <CustomText>
            CypressIO, CucumberJS, Puppeteer, Selenium, Robot &#38; more ...
          </CustomText>
          <CustomButton>Learn more</CustomButton>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}
