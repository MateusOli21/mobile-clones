import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { MenuText, Separator, MenuOption } from "./styles";

const ToolBarMenu = () => {
  return (
    <>
      <MenuOption>
        <Ionicons name="ios-videocam" size={22} color="#f44337" />
        <MenuText>Live</MenuText>
      </MenuOption>
      <Separator />

      <MenuOption>
        <MaterialIcons
          name="photo-size-select-actual"
          size={20}
          color="#4caf50"
        />
        <MenuText>Photo</MenuText>
      </MenuOption>
      <Separator />

      <MenuOption>
        <MaterialCommunityIcons name="video-plus" size={22} color="#e141fc" />
        <MenuText>Room</MenuText>
      </MenuOption>
    </>
  );
};

export default ToolBarMenu;
