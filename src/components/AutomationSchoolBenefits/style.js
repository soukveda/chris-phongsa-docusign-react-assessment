import styled from "@emotion/styled";
import { Button, Card } from "@material-ui/core";
import LiveOnlinePNG from "../../images/live-online.png";

export const CustomBackground = styled("div")`
  background-color: #f8f8f8;
  padding: 5em;
`;
export const LiveOnlineImage = styled("div")`
  background: url(${LiveOnlinePNG});
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

export const InfoCard = styled(Card)`
  background: none;
  box-shadow: none;
  display: flex;
  justify-content: space-evenly;
  min-width: 50px;
`;

export const CardTitle = styled("div")`
  font-size: 19px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
`;

export const CardText = styled("div")`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
`;
