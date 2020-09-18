import React from "react";
import { AntDesign } from "@expo/vector-icons";

import Avatar from "../Avatar";

import { Container, StoryImg, StoryUser, StoryFooter, Text } from "./styles";

const StoryCard = ({ isAddStory, storySrc, userSrc, storyText }) => {
  return (
    <Container>
      <StoryImg source={storySrc} />
      <StoryUser>
        {isAddStory ? (
          <AntDesign name="plus" size={24} color="#1777f2" />
        ) : (
          <Avatar source={userSrc} isStory />
        )}
      </StoryUser>
      <StoryFooter>
        <Text>{storyText}</Text>
      </StoryFooter>
    </Container>
  );
};

export default StoryCard;
