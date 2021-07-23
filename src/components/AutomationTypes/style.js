import styled from "@emotion/styled";
import { Tabs } from "@material-ui/core";

export const CustomTabContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`;

export const CustomTabs = styled(Tabs)`
  .MuiTab-root {
    background: #f8f8f8;
    color: #000000;
  }
`;

export const CustomCard = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  box-shadow: 0px 0px 10px 7px #e6e6fa;
  height: 5em;
  background-color: #ffffff;
  margin-bottom: 20px;
`;
export const CustomBackground = styled("div")`
  background-color: #f8f8f8;
  margin: 0 300px 4em 300px;
  padding: 30px 40px;
`;

export const CustomText = styled("div")`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
`;

