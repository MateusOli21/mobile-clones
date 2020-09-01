import React from "react";
import {
  Container,
  ChannelContainer,
  Column,
  Avatar,
  ChannelName,
  NewVideos,
  WhiteCircle,
} from "./styles";

const ChannelItem: React.FC = () => {
  return (
    <Container>
      <ChannelContainer>
        <Avatar />
        <Column>
          <ChannelName>canal_teste</ChannelName>
          <NewVideos>2 new videos</NewVideos>
        </Column>
      </ChannelContainer>

      <WhiteCircle />
    </Container>
  );
};

export default ChannelItem;
