import React, { useEffect } from "react";

import { useUserContext } from "../../context/UserContext";
import Text from "../../components/Text";

import { Container } from "./styles";

const LoadingScreen = () => {
  const [_, setUser] = useUserContext();

  useEffect(() => {
    setTimeout(async () => {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }, 1500);
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
