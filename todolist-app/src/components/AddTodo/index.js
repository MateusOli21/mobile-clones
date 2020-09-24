import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { AddButton, Text } from "./styles";
import colors from "../../styles/colors";

const AddTodo = () => {
  return (
    <>
      <AddButton>
        <AntDesign name="plus" size={16} color={colors.blue} />
      </AddButton>
      <Text>Adicionar novo</Text>
    </>
  );
};

export default AddTodo;
