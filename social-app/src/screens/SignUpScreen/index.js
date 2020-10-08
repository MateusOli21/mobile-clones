import React from "react";
import { StatusBar } from "react-native";

import HeaderGraphics from "../../components/HeaderGraphics";
import Text from "../../components/Text";

import { Container, Main } from "./styles";

const SignUpScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderGraphics />

      <Main>
        <Text title semi center>
          Crie a sua conta
        </Text>
      </Main>
    </Container>
  );
};

export default SignUpScreen;