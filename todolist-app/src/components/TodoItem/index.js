import React from "react";

import TaskCounter from "../TaskCounter";

import { Container, Text } from "./styles";

const TodoItem = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <Container bgColor={list.color}>
      <Text>{list?.name}</Text>

      <TaskCounter count={completedCount} subtitle="completos" />
      <TaskCounter count={remainingCount} subtitle="restantes" />
    </Container>
  );
};

export default TodoItem;
