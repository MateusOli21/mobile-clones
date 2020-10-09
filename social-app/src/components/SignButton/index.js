import React from "react";
import { ActivityIndicator } from "react-native";

import Text from "../Text";

import { Container } from "./styles";

const SignButton = ({ text, signMethod, isLoading }) => {
  return (
    <Container onPress={signMethod}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text heavy medium center color="#fff">
          {text}
        </Text>
      )}
    </Container>
  );
};

export default SignButton;
