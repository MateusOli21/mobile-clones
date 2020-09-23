import React from "react";
import { Feather } from "@expo/vector-icons";

import checkedImg from "../../../assets/icons/checked.png";

import {
  Container,
  User,
  UserName,
  Checked,
  Description,
  Music,
} from "./styles";

const Info = ({ user }) => {
  return (
    <Container>
      <User>
        <UserName>@{user.username}</UserName>
        <Checked source={checkedImg} />
      </User>
      <Description>{user.description}</Description>
      <Music>
        <Feather name="music" size={13} />
        {user.music}
      </Music>
    </Container>
  );
};

export default Info;
