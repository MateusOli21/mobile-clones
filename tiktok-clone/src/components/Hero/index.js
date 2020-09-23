import React, { useState } from "react";
import { View } from "react-native";

import VideoPlayer from "../VideoPlayer";
import Info from "../Info";
import Sidebar from "../Sidebar";

import { Container, Gradient, Center } from "./styles";

const Hero = ({ videos }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Container
      orientation="vertical"
      onPageSelected={(e) => setSelected(e.nativeEvent.position)}
      initialPage={0}
    >
      {videos.map((video, index) => (
        <View key={video.id}>
          <VideoPlayer
            poster={video.poster}
            video={video.video}
            isPlaying={selected === index}
          />
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
              <Sidebar avatar={video.user.avatar} count={video.count} />
            </Center>
          </Gradient>
        </View>
      ))}
    </Container>
  );
};

export default Hero;
