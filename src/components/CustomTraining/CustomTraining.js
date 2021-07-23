import React from "react";
import { Grid } from "@material-ui/core";
import {
  CustomBackground,
  CustomTitle,
  CustomText,
  CustomButton,
} from "./style";

export default function CustomTraining() {
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
          <CustomTitle>Do you have custom training needs?</CustomTitle>
          <CustomText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit
          </CustomText>
          <CustomButton size="large" disableRipple>
            Learn more
          </CustomButton>
        </Grid>
      </Grid>
    </CustomBackground>
  );
}
