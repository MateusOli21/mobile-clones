import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
`;

export const Divider = styled.View`
  flex: 1;
  height: 1px;
  background: ${colors.lightBlue};
  align-self: center;
`;

export const Text = styled.Text`
  font-size: 38px;
  font-weight: 700;
  color: ${colors.black};
  padding: 0 64px;
`;

export const ListText = styled.Text`
  font-weight: 300;
  color: ${colors.blue};
`;
