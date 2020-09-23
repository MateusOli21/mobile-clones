import React from "react";
import { Feather } from "@expo/vector-icons";

import homeIcon from "../../../assets/icons/home.png";
import discoverIcon from "../../../assets/icons/discover.png";
import messageIcon from "../../../assets/icons/message.png";
import profileIcon from "../../../assets/icons/profile.png";

import {
  Container,
  MenuOption,
  Icon,
  MenuText,
  Border,
  Button,
} from "./styles";

const Tabs = () => {
  return (
    <Container>
      <MenuOption>
        <Icon source={homeIcon} />
        <MenuText isActive>Início</MenuText>
      </MenuOption>

      <MenuOption>
        <Icon source={discoverIcon} />
        <MenuText isActive>Descobrir</MenuText>
      </MenuOption>

      <MenuOption>
        <Border
          start={{ x: 1, y: 0 }}
          locations={[0, 0.5, 0.5, 1]}
          colors={["#f42365", "#f42365", "#37d7cf", "#37d7cf"]}
        >
          <Button>
            <Feather name="plus" size={20} />
          </Button>
        </Border>
      </MenuOption>

      <MenuOption>
        <Icon source={messageIcon} />
        <MenuText isActive>Entrada</MenuText>
      </MenuOption>

      <MenuOption>
        <Icon source={profileIcon} />
        <MenuText isActive>Eu</MenuText>
      </MenuOption>
    </Container>
  );
};

export default Tabs;
