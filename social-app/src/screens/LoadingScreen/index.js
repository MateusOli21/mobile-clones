import React, { useEffect } from "react";

import { useUserContext } from "../../context/UserContext";
import Text from "../../components/Text";

import { Container } from "./styles";

const LoadingScreen = () => {
  const [_, setUser] = useUserContext();

  useEffect(() => {
    setUser((state) => ({ ...state, isLoggedIn: false }));
  }, []);

  return (
    <Container>
      <Text title color="#fff">
        SocialApp
      </Text>
    </Container>
  );
};

export default LoadingScreen;
