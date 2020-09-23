import React from "react";
import { View } from "react-native";

import VideoPlayer from "../VideoPlayer";
import Info from "../Info";
import Sidebar from "../Sidebar";

import { Container, Gradient, Center } from "./styles";

const Hero = ({ videos }) => {
  return (
    <Container orientation="vertical">
      {videos.map((video) => (
        <View key={video.id}>
          <VideoPlayer poster={video.poster} />
          <Gradient
            locations={[0, 0.26, 0.6, 1]}
            colors={[
              "rgba(26,26,26,0.6)",
              "rgba(26,26,26,0)",
              "rgba(26,26,26,0)",
              "rgba(26,26,26,0.6)",
            ]}
          >
            <Center>
              <Info user={video.user} />
              <Sidebar />
            </Center>
          </Gradient>
        </View>
      ))}
    </Container>
  );
};

export default Hero;
