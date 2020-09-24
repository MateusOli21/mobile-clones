import styled from "styled-components/native";

import colors from "../../styles/colors";

export const AddButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 4px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-color: ${colors.lightBlue};
  background: transparent;
  margin-top: 48px;
`;

export const Text = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.blue};
`;
