import React, { useState } from "react";
import { StatusBar } from "react-native";

import { useFirebaseContext } from "../../context/FirebaseContext";
import { useUserContext } from "../../context/UserContext";

import HeaderGraphics from "../../components/HeaderGraphics";
import Text from "../../components/Text";
import InputField from "../../components/InputField";
import SignButton from "../../components/SignButton";
import PhotoPicker from "../../components/PhotoPicker";

import { Container, Main, AuthSection, SignInOption } from "./styles";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const FirebaseAPI = useFirebaseContext();
  const [_, setUser] = useUserContext();

  const navigateToSignInScreen = () => navigation.navigate("SignIn");

  const handleSignUp = async () => {
    setLoading(true);

    const user = { username, email, password, profilePhoto };

    try {
      const createdUser = await FirebaseAPI.createUser(user);

      setUser({ ...createdUser, isLoggedIn: true });
      setLoading(false);
    } catch (err) {
      console.log(`Error while trying to create user`);
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderGraphics />

      <Main>
        <Text title semi center>
          Crie uma conta
        </Text>

        <PhotoPicker
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
        />

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

        <SignButton
          text="Criar conta"
          signMethod={handleSignUp}
          isLoading={loading}
        />

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
