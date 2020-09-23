import React from "react";

import { Poster } from "./styles";

const VideoPlayer = () => {
  const posterVideo = require("../../../assets/poster/01.jpg");

  return <Poster source={posterVideo} />;
};

export default VideoPlayer;
