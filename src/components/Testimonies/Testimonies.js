import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Grid, Typography } from "@material-ui/core";
import { CustomContainer, CustomTitle, CustomText, ReviewCard } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "gray",
    flexGrow: 1,
  },
  containerBackground: {
    boxShadow: "10px 5px 5px gray",
  },
}));

export default function SectionFive(props) {
  const classes = useStyles();
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
