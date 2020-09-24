import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  align-items: center;
  margin-bottom: 12px;
`;

export const Count = styled.Text`
  font-size: 42px;
  font-weight: 300;
  color: ${colors.white};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${colors.white};
`;
