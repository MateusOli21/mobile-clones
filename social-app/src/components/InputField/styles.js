import styled from "styled-components/native";
import Text from "../Text";

export const Container = styled.View`
  margin-bottom: 32px;
`;

export const Label = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-bottom-width: 0.5px;
  border-bottom-color: #8e93a1;
`;
