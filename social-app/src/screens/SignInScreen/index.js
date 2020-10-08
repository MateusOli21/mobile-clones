import React, { useState } from "react";
import { StatusBar } from "react-native";

import HeaderGraphics from "../../components/HeaderGraphics";
import Text from "../../components/Text";
import InputField from "../../components/InputField";
import SignButton from "../../components/SignButton";

import { Container, Main, AuthSection, SignUpOption } from "./styles";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigateToSignUpScreen = () => navigation.navigate("SignUp");

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderGraphics />

      <Main>
        <Text title semi center>
          Entre na sua conta
        </Text>

        <AuthSection>
          <InputField
            label="E-mail"
            isEmail
            inputValue={email}
            setInputChange={setEmail}
          />
          <InputField
            label="Senha"
            isPassword
            inputValue={password}
            setInputChange={setPassword}
          />
        </AuthSection>
        <SignButton text="Entrar" />

        <SignUpOption onPress={navigateToSignUpScreen}>
          <Text center small>
            Ainda não possui conta?{" "}
            <Text heavy color="#8022d9">
              Crie sua conta
            </Text>
          </Text>
        </SignUpOption>
      </Main>
    </Container>
  );
};

export default SignInScreen;
