import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
`;

export const CheckTaskButton = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ isCompleted }) => (isCompleted ? colors.gray : colors.black)};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;
