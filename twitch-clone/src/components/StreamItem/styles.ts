import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin-bottom: 20px;
  margin-right: 24px;
`;

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamInfo = styled.View`
  flex: 1;
  margin-left: 11px;
`;

export const Infos = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.tag};
`;

export const ChannelName = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  margin-left: 5px;
`;

export const LiveTitle = styled.Text`
  color: ${colors.black};
`;

export const LiveCategory = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const Tags = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagContainer = styled.View`
  padding: 2px 8px;
  margin-right: 8px;
  background: ${colors.tag};
  border-radius: 10px;
`;

export const Tag = styled.Text`
  font-size: 13px;
  font-family: roboto_500;
  color: ${colors.black};
`;
