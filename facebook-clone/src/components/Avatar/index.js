import React from "react";

import { Container, User } from "./styles";

const Avatar = ({ source }) => {
  return (
    <Container>
      <User source={source} />
    </Container>
  );
};

export default Avatar;
