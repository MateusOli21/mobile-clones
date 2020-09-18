import styled from "styled-components/native";

export const Container = styled.View`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const AvatarImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #1777f2;
  border-width: ${({ isStory }) => (isStory ? "3px" : 0)};
`;

export const OnlineDot = styled.View`
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: -2px;
  right: -2px;

  border-radius: 8px;
  border-width: 2px;
  border-color: #fff;
  background: #4bcb1f;
`;
