import React from "react";

import likeIcon from "../../../assets/icons/like.png";
import commentIcon from "../../../assets/icons/comment.png";
import shareIcon from "../../../assets/icons/share.png";

import {
  Container,
  Menu,
  User,
  Avatar,
  Icon,
  Count,
  Sound,
  SoundBg,
} from "./styles";

const Sidebar = ({ avatar, count }) => {
  return (
    <Container>
      <Menu>
        <User>
          <Avatar source={avatar} resizeMode="cover" />
        </User>
      </Menu>

      <Menu>
        <Icon source={likeIcon} resizeMode="contain" />
        <Count>{count.likes}</Count>
      </Menu>

      <Menu>
        <Icon source={commentIcon} resizeMode="contain" />
        <Count>{count.comments}</Count>
      </Menu>

      <Menu>
        <Icon source={shareIcon} resizeMode="contain" />
        <Count>{count.share}</Count>
      </Menu>

      <Menu>
        <SoundBg>
          <Sound source={avatar} resizeMode="cover" />
        </SoundBg>
      </Menu>
    </Container>
  );
};

export default Sidebar;
