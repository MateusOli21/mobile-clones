import React from "react";
import { FlatList } from "react-native";

import TodoItem from "../TodoItem";

import { Container } from "./styles";

const TodoList = ({ data }) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TodoItem list={item} />}
      />
    </Container>
  );
};

export default TodoList;
