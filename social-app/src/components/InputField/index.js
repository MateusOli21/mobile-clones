import React from "react";

import { Container, Label, Input } from "./styles";

const InputField = ({
  label,
  isEmail,
  isPassword,
  inputValue,
  setInputChange,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={false}
        secureTextEntry={isEmail ? false : true}
        keyboardType={isEmail ? "email-address" : "default"}
        autoCompleteType={
          isEmail ? "email" : isPassword ? "password" : "username"
        }
        value={inputValue}
        onChangeText={(value) => setInputChange(value.trim())}
      />
    </Container>
  );
};

export default InputField;
