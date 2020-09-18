import React from "react";

import Post from "../Post";

import { Container, BottomDivider } from "./styles";

const Feed = () => {
  const user2 = require("../../../assets/user2.jpg");
  const user4 = require("../../../assets/user4.jpg");
  const post1 = require("../../../assets/post1.jpg");
  const post2 = require("../../../assets/post2.jpg");

  const posts = [
    {
      userName: "Vanessa P.",
      userSrc: user2,
      postText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur...",
      postImg: post1,
      postLikes: 92,
      postComments: 21,
    },
    {
      userName: "Robot T.",
      userSrc: user4,
      postText:
        "Etiam quis pretium leo, sit amet lobortis orci. Fusce rutrum leo.",
      postImg: post2,
      postLikes: 123,
      postComments: 89,
    },
  ];

  return (
    <>
      <Container>
        {posts.map((post, index) => (
          <Post
            key={index}
            userName={post.userName}
            userSrc={post.userSrc}
            postImg={post.postImg}
            postText={post.postText}
            postLikes={post.postLikes}
            postComments={post.postComments}
          />
        ))}
      </Container>
      <BottomDivider />
    </>
  );
};

export default Feed;
