import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  MenuOption,
  Icon,
  MenuText,
  Border,
  Button,
} from "./styles";

const Tabs = () => {
  const homeIcon = require("../../../assets/icons/home.png");
  const discoverIcon = require("../../../assets/icons/discover.png");
  const messageIcon = require("../../../assets/icons/message.png");
  const profileIcon = require("../../../assets/icons/profile.png");

  const primaryColor = "#f42365";
  const secundaryColor = "#37d7cf";

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
          colors={[primaryColor, primaryColor, secundaryColor, secundaryColor]}
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
