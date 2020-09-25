import React from "react";
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

const TodosModal = ({ toggleShowTasks, list }) => {
  const taskCount = list.todos.length;
  const completedCount = list.todos.filter((todo) => todo.completed).length;

  return (
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
          renderItem={({ item }) => <TodoItem todo={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Section>

      <Footer behavior="padding">
        <Input borderColor={list.color} placeholder="Adicionar nova tarefa" />
        <AddTaskButton bgColor={list.color}>
          <AntDesign name="plus" size={16} color={colors.white} />
        </AddTaskButton>
      </Footer>
    </Container>
  );
};

export default TodosModal;
