import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TodoItem from "../TodoItem";

import colors from "../../styles/colors";
import {
  Container,
  CloseModal,
  Header,
  Title,
  TaskCount,
  Section,
  TasksList,
  Footer,
  Input,
  AddTaskButton,
} from "./styles";

const TodosModal = ({ toggleShowTasks, list, updateList }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const taskCount = list.todos.length;
  const completedCount = list.todos.filter((todo) => todo.completed).length;

  const toggleCompletedTodo = (index) => {
    list.todos[index].completed = !list.todos[index].completed;
    updateList(list);
  };

  const addNewTodo = () => {
    list.todos.push({
      title: newTodoTitle,
      completed: false,
    });

    setNewTodoTitle("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <CloseModal onPress={toggleShowTasks}>
          <AntDesign name="close" size={24} color={colors.black} />
        </CloseModal>

        <Header bgColor={list.color}>
          <Title>{list.name}</Title>
          <TaskCount>
            {completedCount} de {taskCount} tarefas completas
          </TaskCount>
        </Header>

        <Section>
          <TasksList
            data={list.todos}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TodoItem
                todo={item}
                index={index}
                toggleCompletedTodo={toggleCompletedTodo}
              />
            )}
          />
        </Section>

        <Footer>
          <Input
            borderColor={list.color}
            placeholder="Adicionar nova tarefa"
            value={newTodoTitle}
            onChangeText={(text) => setNewTodoTitle(text)}
          />
          <AddTaskButton bgColor={list.color} onPress={addNewTodo}>
            <AntDesign name="plus" size={16} color={colors.white} />
          </AddTaskButton>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default TodosModal;
