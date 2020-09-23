import React from "react";

import { Poster } from "./styles";

const VideoPlayer = ({ poster }) => {
  return <Poster source={poster} />;
};

export default VideoPlayer;
