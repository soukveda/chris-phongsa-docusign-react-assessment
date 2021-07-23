import styled from "@emotion/styled";
import { Button } from "@material-ui/core";

export const CustomBackground = styled("div")`
  background-color: #f8f8f8;
  padding: 5em;
`;

export const CustomTitle = styled("div")`
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: center;
`;

export const CustomText = styled("div")`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
`;

export const AutomationSchoolContainer = styled("div")`
  border-radius: 1em;
  width: 1076px;
  height: 530px;
  background-color: #444444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7em;
`;

export const AutomationTitle = styled("div")`
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  color: #d0d0d0;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: center;
`;

export const AutomationText = styled("div")`
  padding-left: 15em;
  padding-right: 15em;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #d0d0d0;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
`;

export const AutomationButton = styled(Button)`
  margin-top: 1em;
  background-color: #625be7;
`;
