import styled from "@emotion/styled";
import { Container, Button } from "@material-ui/core";
import consultingImage from "../../images/consulting.png";

export const CustomContainer = styled(Container)`
  min-height: 45em;
  min-width: 100em;
  flex-grow: 3;
  filter: brightness(50%);
  width: 100%;
  background: url(${consultingImage}) no-repeat center;

  display: flex;
  justify-content: center;
`;

export const CustomImage = styled("img")`
  width: 100%;
  z-index: 0;
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

export const CustomButton = styled(Button)`
  margin-top: 1em;
  background-color: #625be7;
  border-radius: 15px;
  padding: 7px 75px;
  color: #ffffff;
  font-style: normal;
`;
