import React from "react";

import { Container, AvatarImg, OnlineDot } from "./styles";

const Avatar = ({ source, isOnline, isStory }) => {
  return (
    <Container>
      <AvatarImg source={source} isStory={isStory} />
      {isOnline && <OnlineDot />}
    </Container>
  );
};

export default Avatar;
