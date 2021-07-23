import styled from "@emotion/styled";
import { Container, Typography } from "@material-ui/core";

export const CustomContainer = styled(Container)`
  border-radius: 1em;
  box-shadow: 0px 10px 10px 5px #f0f0f0;
  height: 30em;
  background-color: #ffffff;
  padding-top: 20px;
  margin: 40px;
`;

export const ReviewCard = styled("div")`
  display: flex;
  border-radius: 15px;
  justify-content: center;
  background-color: #e8e8e8;
`;

export const CustomText = styled("div")`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: center;
`;

export const CustomTitle = styled(Typography)`
  margin-bottom: 50px;
`
