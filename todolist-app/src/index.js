import React, { useState } from "react";
import { Modal, View, Text } from "react-native";

import tempData from "./tempData";
import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";

import { Container } from "./styles/main";

export default function Main() {
  const [visibleModal, setVisibleModal] = useState(false);

  const closeModal = () => setVisibleModal(false);
  const openModal = () => setVisibleModal(true);

  return (
    <Container>
      <Modal
        animationType="slide"
        visible={visibleModal}
        onRequestClose={closeModal}
      >
        <AddListModal closeModal={closeModal} />
      </Modal>
      <Logo />
      <AddTodo openModal={openModal} />
      <TodoList data={tempData} />
    </Container>
  );
}
