import React from "react";
import { CustomLikeButton } from "./style";

export default function AddLikeButton(props) {
    return <CustomLikeButton onClick={() => props.changeLikes()}>Click to increase likes!</CustomLikeButton>
}