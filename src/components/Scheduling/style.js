import styled from "@emotion/styled";
import { Card } from "@material-ui/core";

export const InfoCard = styled(Card)`
  box-shadow: none;
  display: flex;
  justify-content: center;
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
