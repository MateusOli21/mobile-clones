import React from "react";
import { StatusBar } from "react-native";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Tabs from "../../components/Tabs";
import api from "../../services/api";

import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Header />
        <Hero videos={api} />
        <Tabs />
      </Container>
    </>
  );
};

export default Home;
