import React from "react";
import { FlatList } from "react-native";

import TodoListItem from "../TodoListItem";

import { Container } from "./styles";

const TodoList = ({ data }) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TodoListItem list={item} />}
      />
    </Container>
  );
};

export default TodoList;
