import React from "react";
import { Text, FlatList } from "react-native";

import { Container } from "./styles";
import TodoItem from "../TodoItem";

const TodoList = ({ data }) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(todo) => todo.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TodoItem list={item} />}
      />
    </Container>
  );
};

export default TodoList;
