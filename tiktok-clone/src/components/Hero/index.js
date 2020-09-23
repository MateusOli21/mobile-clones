import React from "react";
import { View } from "react-native";

import { Container, Gradient } from "./styles";
import VideoPlayer from "../VideoPlayer";

const Hero = ({ videos }) => {
  return (
    <Container orientation="vertical">
      {videos.map((video) => (
        <View key={video.id}>
          <VideoPlayer />
          <Gradient
            locations={[0, 0.26, 0.6, 1]}
            colors={[
              "rgba(26,26,26,0.6)",
              "rgba(26,26,26,0)",
              "rgba(26,26,26,0)",
              "rgba(26,26,26,0.6)",
            ]}
          ></Gradient>
        </View>
      ))}
    </Container>
  );
};

export default Hero;
