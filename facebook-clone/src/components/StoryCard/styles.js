import styled from "styled-components/native";

export const Container = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;

export const StoryImg = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;

export const StoryUser = styled.View`
  width: 39px;
  height: 39px;
  position: absolute;
  top: 8px;
  left: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
`;

export const StoryFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;

export const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;
