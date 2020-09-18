import React from "react";

import { Container, AvatarImg, OnlineDot } from "./styles";

const Avatar = ({ source, isOnline }) => {
  return (
    <Container>
      <AvatarImg source={source} />
      {isOnline && <OnlineDot />}
    </Container>
  );
};

export default Avatar;
