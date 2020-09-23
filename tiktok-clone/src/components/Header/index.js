import React from "react";
import { Container, Text, Separator } from "./styles";

const Header = () => {
  return (
    <Container>
      <Text>Seguindo</Text>
      <Separator />
      <Text isBold>Para você</Text>
    </Container>
  );
};

export default Header;
