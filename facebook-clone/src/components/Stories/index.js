import React from "react";
import { ScrollView } from "react-native";

import { Container, BottomDivider } from "./styles";
import StoryCard from "../StoryCard";

const Stories = () => {
  const user1 = require("../../../assets/user1.jpg");
  const user2 = require("../../../assets/user2.jpg");
  const user3 = require("../../../assets/user3.jpg");
  const user4 = require("../../../assets/user4.jpg");

  const story2 = require("../../../assets/story2.jpg");
  const story3 = require("../../../assets/story3.jpg");
  const story4 = require("../../../assets/story4.jpg");

  const usersStories = [
    { storySrc: story3, userSrc: user2, storyText: "Vanessa P." },
    { storySrc: story3, userSrc: user4, storyText: "Robot T." },
    { storySrc: story4, userSrc: user3, storyText: "Jena R." },
    { storySrc: story2, userSrc: user2, storyText: "Mary D." },
  ];

  return (
    <>
      <Container>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StoryCard isAddStory storySrc={user1} storyText="Add to story" />

          {usersStories.map((story, index) => (
            <StoryCard
              key={index}
              storySrc={story.storySrc}
              userSrc={story.userSrc}
              storyText={story.storyText}
            />
          ))}
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Stories;
