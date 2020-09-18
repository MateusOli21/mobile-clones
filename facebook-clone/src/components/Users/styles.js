import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;

export const Room = styled.TouchableOpacity`
  width: 115px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  margin-right: 12px;

  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
`;

export const Text = styled.Text`
  font-size: 12px;
  padding-left: 6px;
  color: #1777f2;
`;

export const BottomDivider = styled.View`
  width: 100%;
  height: 7px;
  background: #f0f2f5;
`;
