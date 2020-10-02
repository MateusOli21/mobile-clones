import React, { useState, useEffect } from "react";
import { Modal, ActivityIndicator } from "react-native";

import firebaseAPI from "./firebase/api";
import tempData from "./tempData";
import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";

import colors from "./styles/colors";
import { Container } from "./styles/main";

export default function Main() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = await firebaseAPI.signIn(setUser);
      setUser(userId);

      // if (userId) {
      // const temp = await firebaseAPI.getLists(userId, setLists);
      // setLists(loadedLists);
      // }
    };

    getUser();
  }, []);

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

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.blue} />
      </Container>
    );
  }

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
