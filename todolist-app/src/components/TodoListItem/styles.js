import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 200px;
  align-items: center;
  margin: 0 12px;
  padding: 32px 16px;
  border-radius: 6px;
  background: ${({ bgColor }) => bgColor};
`;

export const Text = styled.Text`
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 700;
  color: ${colors.white};
`;
