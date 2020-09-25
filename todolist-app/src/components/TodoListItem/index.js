import React, { useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import TaskCounter from "../TaskCounter";
import TodosModal from "../TodosModal";

import { Container, Text } from "./styles";

const TodoListItem = ({ list, updateList }) => {
  const [showTasks, setShowTasks] = useState(false);

  const toggleShowTasks = () => setShowTasks(!showTasks);

  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <>
      <Modal
        animationType="slide"
        visible={showTasks}
        onRequestClose={toggleShowTasks}
      >
        <TodosModal
          list={list}
          toggleShowTasks={toggleShowTasks}
          updateList={updateList}
        />
      </Modal>

      <Container bgColor={list.color}>
        <TouchableOpacity onPress={toggleShowTasks}>
          <Text>{list?.name}</Text>

          <TaskCounter count={completedCount} subtitle="completos" />
          <TaskCounter count={remainingCount} subtitle="restantes" />
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default TodoListItem;
