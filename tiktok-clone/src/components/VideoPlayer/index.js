import React from "react";

import { Poster, Player } from "./styles";

const VideoPlayer = ({ poster, video, isPlaying }) => {
  return (
    <>
      {isPlaying ? (
        <Player
          posterSource={poster}
          source={video}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls={false}
          shouldPlay
          resizeMode="cover"
        />
      ) : (
        <Poster source={poster} />
      )}
    </>
  );
};

export default VideoPlayer;
