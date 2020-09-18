import React from "react";

import PostHeader from "../PostHeader";
import FooterMenu from "../PostFooterMenu";
import PostFooterCount from "../PostFooterCount";

import {
  Container,
  PostText,
  PostImage,
  Footer,
  Separator,
  BottomDivider,
} from "./styles";

const Post = ({
  userName,
  userSrc,
  postText,
  postImg,
  postLikes,
  postComments,
}) => {
  return (
    <>
      <Container>
        <PostHeader userName={userName} userSrc={userSrc} />

        <PostText>{postText}</PostText>
        <PostImage source={postImg} />

        <Footer>
          <PostFooterCount postLikes={postLikes} postComments={postComments} />
          <Separator />
          <FooterMenu />
        </Footer>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Post;
