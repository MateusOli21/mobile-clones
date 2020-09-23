import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  width: 100%;
  height: 59px;
  z-index: 1;
  position: absolute;
  bottom: 0;
  flex-direction: row;

  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
`;

export const MenuOption = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image.attrs({ resizeMode: "contain" })`
  height: 32px;
`;

export const MenuText = styled.Text`
  font-size: 9px;
  margin-top: -3px;
  color: ${({ isActive }) => (isActive ? "#fff" : "rgba(255,255,255,0.6)")};
`;

export const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
`;

export const Button = styled.View`
  width: 36px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
`;
