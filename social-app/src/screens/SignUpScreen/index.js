import React, { useState } from "react";
import { StatusBar } from "react-native";

import HeaderGraphics from "../../components/HeaderGraphics";
import Text from "../../components/Text";
import InputField from "../../components/InputField";
import SignButton from "../../components/SignButton";

import { Container, Main, AuthSection, SignInOption } from "./styles";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigateToSignInScreen = () => navigation.navigate("SignIn");

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderGraphics />

      <Main>
        <Text title semi center>
          Crie uma conta
        </Text>

        <AuthSection>
          <InputField
            label="Usuário"
            isEmail
            inputValue={username}
            setInputChange={setUsername}
          />
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

        <SignButton text="Criar conta" />

        <SignInOption onPress={navigateToSignInScreen}>
          <Text center small>
            Já possui conta?{" "}
            <Text heavy color="#8022d9">
              Faça login
            </Text>
          </Text>
        </SignInOption>
      </Main>
    </Container>
  );
};

export default SignUpScreen;
