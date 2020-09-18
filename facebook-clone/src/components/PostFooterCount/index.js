import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container, Row, LikeCount, TextCount } from "./styles";

const PostFooterCount = ({ postLikes, postComments }) => {
  return (
    <Container>
      <Row>
        <LikeCount>
          <AntDesign name="like1" size={12} color="#fff" />
        </LikeCount>
        <TextCount>{postLikes} likes</TextCount>
      </Row>
      <TextCount>{postComments} comments</TextCount>
    </Container>
  );
};

export default PostFooterCount;
