import React, { useEffect, useState } from "react";
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
import FirebaseInstance from "../../api/FirebaseInstance";

export default function AutomationSchool(props) {
  const [autoTitle, setAutoTitle] = useState(props.title);
  const [autoDescription, setAutoDescription] = useState(props.title);
  const [sectionTitle, setSectionTitle] = useState(props.title);
  const [sectionDescription, setSectionDescription] = useState(props.title);
  useEffect(() => {
    FirebaseInstance.get("/automationSchool.json")
      .then((resp) => {
        setAutoTitle(resp.data.titles["autoSchool"].title);
        setAutoDescription(resp.data.titles["autoSchool"].description);
        setSectionTitle(resp.data.titles["whatWeOffer"].title);
        setSectionDescription(resp.data.titles["whatWeOffer"].description);
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
          <CustomTitle>{sectionTitle}</CustomTitle>
        </Grid>
        <Grid item xs={4}>
          <CustomText>{sectionDescription}</CustomText>
        </Grid>
        <Grid item>
          <AutomationSchoolContainer>
            <AutomationTitle>{autoTitle}</AutomationTitle>
            <AutomationText>{autoDescription}</AutomationText>
            <AutomationButton>
              <CustomText>Continue</CustomText>
            </AutomationButton>
            <AutomationText>Likes for DocuSign: {props.likes}</AutomationText>
          </AutomationSchoolContainer>
        </Grid>
      </Grid>
    </CustomBackground>
  );
}
