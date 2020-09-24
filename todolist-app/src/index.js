import React from "react";

import tempData from "./tempData";
import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { Container } from "./styles/main";

export default function Main() {
  return (
    <Container>
      <Logo />
      <AddTodo />
      <TodoList data={tempData} />
    </Container>
  );
}
