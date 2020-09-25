import React, { useState } from "react";
import { Modal } from "react-native";

import tempData from "./tempData";
import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";

import { Container } from "./styles/main";

export default function Main() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [lists, setLists] = useState(tempData);

  const toggleVisibleModal = () => setVisibleModal(!visibleModal);

  const addList = (list) => {
    setLists([...lists, { ...list, id: lists.length + 1, todos: [] }]);
  };

  const updateList = (list) => {
    setLists(
      lists.map((item) => {
        return item.id === list.id ? list : item;
      })
    );
  };

  return (
    <Container>
      <Modal
        animationType="slide"
        visible={visibleModal}
        onRequestClose={toggleVisibleModal}
      >
        <AddListModal closeModal={toggleVisibleModal} addList={addList} />
      </Modal>
      <Logo />
      <AddTodo openModal={toggleVisibleModal} />
      <TodoList data={lists} updateList={updateList} />
    </Container>
  );
}
