import React from "react";
import { StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";

import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";
import Stories from "./components/Stories";

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Stories />
        </ScrollView>
      </Container>
    </>
  );
}
