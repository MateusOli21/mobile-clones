import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LikeCount = styled.View`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  border-radius: 10px;
  background: #1878f3;
`;

export const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
