import React from "react";

import ThumbnailImg from "../../images/stream_thumbnail.jpg";

import {
  Container,
  StreamInfo,
  Infos,
  StreamThumbnail,
  Header,
  Avatar,
  ChannelName,
  LiveTitle,
  LiveCategory,
  Tag,
  Tags,
  TagContainer,
} from "./styles";

const StreamItem: React.FC = () => {
  return (
    <Container>
      <StreamThumbnail source={ThumbnailImg} />

      <StreamInfo>
        <Infos>
          <Header>
            <Avatar />
            <ChannelName numberOfLines={1}>mateus_oli</ChannelName>
          </Header>
          <LiveTitle numberOfLines={1}>testando react native</LiveTitle>
          <LiveCategory numberOfLines={1}>Technology</LiveCategory>
        </Infos>

        <Tags>
          <TagContainer>
            <Tag>Portuguese</Tag>
          </TagContainer>
          <TagContainer>
            <Tag>Esports</Tag>
          </TagContainer>
        </Tags>
      </StreamInfo>
    </Container>
  );
};

export default StreamItem;
