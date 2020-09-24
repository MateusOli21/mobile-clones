import React from "react";

import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";

import { Container } from "./styles/main";

export default function Main() {
  return (
    <Container>
      <Logo />
      <AddTodo />
    </Container>
  );
}
