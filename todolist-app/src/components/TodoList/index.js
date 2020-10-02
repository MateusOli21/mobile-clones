import React from "react";
import { FlatList } from "react-native";

import TodoListItem from "../TodoListItem";

import { Container } from "./styles";

const TodoList = ({ data, updateList }) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        renderItem={({ item }) => (
          <TodoListItem list={item} updateList={updateList} />
        )}
      />
    </Container>
  );
};

export default TodoList;
