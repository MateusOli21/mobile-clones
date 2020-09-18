import React from "react";
import { Entypo } from "@expo/vector-icons";

import Avatar from "../Avatar";

import { Container, Row, PostInfos, User, Time } from "./styles";

const PostHeader = ({ userSrc, userName }) => {
  return (
    <Container>
      <Row>
        <Avatar source={userSrc} />
        <PostInfos>
          <User>{userName}</User>
          <Row>
            <Time>9m</Time>
            <Entypo name="dot-single" size={12} color="#747476" />
            <Entypo name="globe" size={12} color="#747476" />
          </Row>
        </PostInfos>
      </Row>

      <Entypo name="dots-three-horizontal" size={12} color="#222121" />
    </Container>
  );
};

export default PostHeader;
