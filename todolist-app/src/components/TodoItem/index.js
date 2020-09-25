import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../styles/colors";
import { Container, CheckTaskButton, Text } from "./styles";

const TaskItem = ({ todo, index, toggleCompletedTodo }) => {
  return (
    <Container>
      <CheckTaskButton onPress={() => toggleCompletedTodo(index)}>
        <Ionicons
          name={todo.completed ? "ios-square" : "ios-square-outline"}
          size={24}
          color={colors.gray}
        />
      </CheckTaskButton>

      <Text isCompleted={todo.completed}>{todo.title}</Text>
    </Container>
  );
};

export default TaskItem;
