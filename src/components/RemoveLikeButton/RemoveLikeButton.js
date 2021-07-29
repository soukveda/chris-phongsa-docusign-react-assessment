import React from "react";
import { CustomLikeButton } from "./style";

export default function RemoveLikeButton(props) {
    return <CustomLikeButton onClick={() => props.changeLikes()}>Click to remove likes!</CustomLikeButton>
}