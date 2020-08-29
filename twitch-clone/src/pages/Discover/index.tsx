import React from "react";
import { View } from "react-native";

import { Wrapper, Container, Heading } from "./styles";
import Header from "../../components/Header";

const ComingSoon: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Heading>Discover</Heading>
      </Container>
    </Wrapper>
  );
};

export default ComingSoon;
