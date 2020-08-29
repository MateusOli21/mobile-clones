import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${colors.tag};
`;

export const OnlineStatus = styled.View`
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 10px;
  border: 2px solid ${colors.primary};
  background: ${colors.green};
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
