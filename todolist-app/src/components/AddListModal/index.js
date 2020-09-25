import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import colors, { backgroundColors } from "../../styles/colors";

import {
  Container,
  CloseButton,
  AddContainer,
  Title,
  Input,
  CreateButton,
  CreateText,
  ColorSelectorContainer,
  ColorSelect,
} from "./styles";

const AddListModal = ({ closeModal, addList }) => {
  const [newListName, setNewListName] = useState("");
  const [newListColor, setNewListColor] = useState(backgroundColors[0]);

  const createNewTodo = () => {
    if (newListName) {
      const name = newListName;
      const color = newListColor;

      const list = { name, color };

      addList(list);
      setNewListName("");
      closeModal();
    }
  };

  return (
    <Container>
      <CloseButton onPress={closeModal}>
        <AntDesign name="close" size={24} color={colors.black} />
      </CloseButton>

      <AddContainer>
        <Title>Criar uma nova lista</Title>
        <Input
          placeholder="Nome da lista"
          onChangeText={(text) => setNewListName(text)}
        />

        <ColorSelectorContainer>
          {backgroundColors.map((color, index) => (
            <ColorSelect
              key={index}
              style={{ backgroundColor: color }}
              onPress={() => setNewListColor(color)}
            />
          ))}
        </ColorSelectorContainer>

        <CreateButton bgColor={newListColor} onPress={createNewTodo}>
          <CreateText>Criar</CreateText>
        </CreateButton>
      </AddContainer>
    </Container>
  );
};

export default AddListModal;
