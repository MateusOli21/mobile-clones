import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  margin-bottom: 24px;
`;

export const ChannelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${colors.tag};
`;

export const ChannelName = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 16px;
`;

export const NewVideos = styled.Text`
  margin-top: 1px;
  color: ${colors.gray};
  font-size: 13px;
`;

export const WhiteCircle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background: ${colors.black};
  opacity: 0.85;
`;
