import React from "react";

import Avatar from "../Avatar";

import { Container } from "./styles";

const User = ({ imgSrc, isOnline }) => {
  return (
    <Container>
      <Avatar source={imgSrc} isOnline={isOnline} />
    </Container>
  );
};

export default User;
