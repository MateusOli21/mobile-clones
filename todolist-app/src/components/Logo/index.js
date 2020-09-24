import React from "react";

import { Container, Divider, Text, ListText } from "./styles";

const Logo = () => {
  return (
    <Container>
      <Divider />
      <Text>
        Todo
        <ListText>Lists</ListText>
      </Text>
      <Divider />
    </Container>
  );
};

export default Logo;
