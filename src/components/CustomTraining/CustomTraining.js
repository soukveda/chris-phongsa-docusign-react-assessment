import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import {
  CustomBackground,
  CustomTitle,
  CustomText,
  CustomButton,
} from "./style";
import FirebaseInstance from "../../api/FirebaseInstance";

export default function CustomTraining() {
  const [trainingTitle, setTrainingTitle] = useState("Default Title");
  const [trainingDescription, setTrainingDescription] = useState(
    "Default Description"
  );
  useEffect(() => {
    FirebaseInstance.get("/customTraining.json")
      .then((resp) => {
        setTrainingTitle(resp.data.title);
        setTrainingDescription(resp.data.description);
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
        <Grid item>
          <CustomTitle>{trainingTitle}</CustomTitle>
          <CustomText>{trainingDescription}</CustomText>
          <CustomButton size="large" disableRipple>
            Learn more
          </CustomButton>
        </Grid>
      </Grid>
    </CustomBackground>
  );
}
