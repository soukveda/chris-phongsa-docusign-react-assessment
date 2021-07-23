import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@material-ui/core";
import { CustomContainer, CustomTitle, CustomText, ReviewCard } from "./style";

export default function Testimonies() {
  var items = [
    {
      name: "Testimonials for our training program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit Loremipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut Lorem ipsum dolor sit",
    },
    {
      name: "Testimonials for our training program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit Loremipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut Lorem ipsum dolor sit",
    },
    {
      name: "Testimonials for our training program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit Loremipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut Lorem ipsum dolor sit",
    },
    {
      name: "Testimonials for our training program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit Loremipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut Lorem ipsum dolor sit",
    },
    {
      name: "Testimonials for our training program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit Loremipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut Lorem ipsum dolor sit Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut Lorem ipsum dolor sit Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut Lorem ipsum dolor sit",
    },
  ];

  return (
    <CustomContainer>
      <CustomTitle variant="h6">
        Testimonials for our training program
      </CustomTitle>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item}></Item>
        ))}
      </Carousel>
    </CustomContainer>
  );
}

function Item(props) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item xs={3}>
        <ReviewCard>
          <CustomText>{props.item.description}</CustomText>
        </ReviewCard>
      </Grid>
      <Grid item xs={3}>
        <ReviewCard>
          <CustomText>{props.item.description}</CustomText>
        </ReviewCard>
      </Grid>
      <Grid item xs={3}>
        <ReviewCard>
          <CustomText>{props.item.description}</CustomText>
        </ReviewCard>
      </Grid>
    </Grid>
  );
}
