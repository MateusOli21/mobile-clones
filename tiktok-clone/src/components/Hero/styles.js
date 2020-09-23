import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export const Container = styled(ViewPager)`
  height: ${height}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
`;

export const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;
