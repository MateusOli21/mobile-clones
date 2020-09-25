import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 32px;
`;

export const AddContainer = styled.View`
  align-self: stretch;
  margin: 0 32px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  align-self: center;
  color: ${colors.black};
`;

export const Input = styled.TextInput`
  height: 50px;
  margin-top: 8px;
  padding: 0 16px;
  font-size: 18px;
  border-radius: 6px;
  border-width: 0.5px;
  border-color: ${colors.blue};
`;

export const CreateButton = styled.TouchableOpacity`
  height: 50px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${({ bgColor }) => bgColor};
`;

export const CreateText = styled.Text`
  color: ${colors.white};
  font-weight: 700;
`;

export const ColorSelectorContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ColorSelect = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 4px;
`;
