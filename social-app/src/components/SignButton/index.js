import React from "react";

import Text from "../Text";

import { Container } from "./styles";

const SignButton = ({ text }) => {
  return (
    <Container>
      <Text heavy medium center color="#fff">
        {text}
      </Text>
    </Container>
  );
};

export default SignButton;
