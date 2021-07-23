import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Tab, Box, Link } from "@material-ui/core";
import {
  CustomCard,
  CustomTabContainer,
  CustomTabs,
  CustomBackground,
  CustomText,
} from "./style";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <CustomTabContainer>
        <CustomTabs value={value} onChange={handleChange}>
          <Tab label="UI Automation" {...a11yProps(0)} />
          <Tab disabled label="API Automation" {...a11yProps(1)} />
          <Tab disabled label="Mobile Automation" {...a11yProps(2)} />
        </CustomTabs>
      </CustomTabContainer>
      <CustomBackground>
        <TabPanel value={value} index={0}>
          <Grid container direction="column">
            <Grid item container spacing={2}>
              <Grid item sm={2}>
                <CustomCard>cypress</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
                <CustomCard>cucumberjs</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
                <CustomCard>puppeteer</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
                <CustomCard>Selenium</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
                <CustomCard>Robot</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
                <CustomCard>GEB</CustomCard>
              </Grid>
              <Grid item sm={8}>
                <CustomText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit
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
