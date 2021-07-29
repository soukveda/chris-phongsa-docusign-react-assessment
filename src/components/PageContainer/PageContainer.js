import React from "react";
import { Grid } from "@material-ui/core";
import Scheduling from "../Scheduling/Scheduling";
import AutomationSchoolBenefits from "../AutomationSchoolBenefits/AutomationSchoolBenefits";
import AutomationTypes from "../AutomationTypes/AutomationTypes";
import CustomTraining from "../CustomTraining/CustomTraining";
import Testimonies from "../Testimonies/Testimonies";
import Header from "../Header/Header";
import AutomationSchool from "../AutomationSchool/AutomationSchool";

export default function PageContainer(props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Scheduling />
      </Grid>
      <Grid item>
        <AutomationSchoolBenefits likes={props.likes} />
      </Grid>
      <Grid item>
        <AutomationTypes />
      </Grid>
      <Grid item>
        <CustomTraining />
      </Grid>
      <Grid item>
        <Testimonies />
      </Grid>
      <Grid item>
        <AutomationSchool likes={props.likes} />
      </Grid>
    </Grid>
  );
}
