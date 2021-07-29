import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Tab, Box, Link } from "@material-ui/core";
import {
  CustomCard,
  CustomTabContainer,
  CustomTabs,
  CustomBackground,
  CustomText,
} from "./style";
import FirebaseInstance from "../../api/FirebaseInstance";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function AutomationTypes() {
  const [value, setValue] = useState(0);
  const [uiTitle, setUiTitle] = useState("Default Title");
  const [apiTitle, setApiTitle] = useState("Default Title");
  const [mobileTitle, setMobileTitle] = useState("Default Title");
  const [automationTypes, setAutomationTypes] = useState([
    {
      name: "Default title",
      description: "Default Description",
    },
  ]);
  const [isQueried, setIsQueried] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const preventDefault = (event) => event.preventDefault();

  useEffect(() => {
    FirebaseInstance.get("/automationTypes.json")
      .then((resp) => {
        setUiTitle(resp.data["uiAuto"].name);
        setApiTitle(resp.data["apiAuto"].name);
        setMobileTitle(resp.data["mobileAuto"].name);
        const queriedTypes = [];
        Object.values(resp.data["uiAuto"].types).forEach((type) => {
          queriedTypes.push(type);
        });

        setAutomationTypes(queriedTypes);
        setIsQueried(true);
      })
      .catch();
  }, []);

  return (
    <React.Fragment>
      <CustomTabContainer>
        <CustomTabs value={value} onChange={handleChange}>
          <Tab label={uiTitle} {...a11yProps(0)} />
          <Tab disabled label={apiTitle} {...a11yProps(1)} />
          <Tab disabled label={mobileTitle} {...a11yProps(2)} />
        </CustomTabs>
      </CustomTabContainer>
      <CustomBackground>
        <TabPanel value={value} index={0}>
          <Grid container direction="column">
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>{automationTypes[0].name}</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>{automationTypes[0].description}</CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>
                  {isQueried
                    ? automationTypes[1].name
                    : automationTypes[0].name}
                </CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  {isQueried
                    ? automationTypes[1].description
                    : automationTypes[0].description}
                </CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>
                  {isQueried
                    ? automationTypes[2].name
                    : automationTypes[0].name}
                </CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  {isQueried
                    ? automationTypes[2].description
                    : automationTypes[0].description}
                </CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>
                  {isQueried
                    ? automationTypes[3].name
                    : automationTypes[0].name}
                </CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  {isQueried
                    ? automationTypes[3].description
                    : automationTypes[0].description}
                </CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>
                  {isQueried
                    ? automationTypes[4].name
                    : automationTypes[0].name}
                </CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  {isQueried
                    ? automationTypes[4].description
                    : automationTypes[0].description}
                </CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>
                  {isQueried
                    ? automationTypes[5].name
                    : automationTypes[0].name}
                </CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  {isQueried
                    ? automationTypes[5].description
                    : automationTypes[0].description}
                </CustomText>
                <CustomText>
                  <Link href="#" onClick={preventDefault}>
                    Learn more
                  </Link>
                </CustomText>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </CustomBackground>
    </React.Fragment>
  );
}
