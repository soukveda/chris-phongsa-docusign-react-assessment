import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@material-ui/core";
import { CustomContainer, CustomTitle, CustomText, ReviewCard } from "./style";
import FirebaseInstance from "../../api/FirebaseInstance";

export default function Testimonies() {
  const [testimonialsTitle, setTestimonialsTitle] = useState("Default title");
  const [testimonialsDescription, setTestimonialsDescription] = useState([
    "Default Description",
  ]);
  const [isQueried, setIsQueried] = useState(false);

  useEffect(() => {
    FirebaseInstance.get("/testimonials.json")
      .then((resp) => {
        setTestimonialsTitle(resp.data.title);
        const queriedDesc = [];
        Object.values(resp.data.reviews).forEach((item) => {
          queriedDesc.push(item);
        });
        setTestimonialsDescription(queriedDesc);
        setIsQueried(true);
      })
      .catch();
  }, []);
  let items = [
    {
      description: testimonialsDescription[0],
    },
    {
      description: isQueried
        ? testimonialsDescription[1]
        : testimonialsDescription[0],
    },
    {
      description: isQueried
        ? testimonialsDescription[2]
        : testimonialsDescription[0],
    },
    {
      description: isQueried
        ? testimonialsDescription[3]
        : testimonialsDescription[0],
    },
    {
      description: isQueried
        ? testimonialsDescription[4]
        : testimonialsDescription[0],
    },
  ];

  return (
    <CustomContainer>
      <CustomTitle variant="h6">{testimonialsTitle}</CustomTitle>
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
