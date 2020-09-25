import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 32px;
  z-index: 10;
`;

export const Header = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: flex-end;
  margin-left: 32px;
  border-bottom-width: 3px;
  border-color: ${({ bgColor }) => bgColor};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.black};
`;

export const TaskCount = styled.Text`
  margin-top: 4px;
  margin-bottom: 16px;
  color: ${colors.gray};
  font-weight: 500;
`;

export const Section = styled.View`
  flex: 3;
  align-self: stretch;
`;

export const TasksList = styled.FlatList`
  padding: 48px 32px;
`;

export const Footer = styled.KeyboardAvoidingView`
  flex: 1;
  align-self: stretch;
  padding: 0 32px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 48px;
  margin-right: 8px;
  padding: 0 12px;
  border-width: 0.5px;
  border-radius: 6px;
  border-color: ${({ borderColor }) => borderColor};
`;

export const AddTaskButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) => bgColor};
`;
