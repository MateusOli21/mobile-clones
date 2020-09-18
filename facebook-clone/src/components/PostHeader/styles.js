import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  margin-top: 6px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostInfos = styled.View`
  padding-left: 10px;
`;

export const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

export const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
