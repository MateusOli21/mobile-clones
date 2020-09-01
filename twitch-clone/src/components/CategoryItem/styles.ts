import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImg = styled.Image`
  width: 98px;
  height: 130px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13px;
`;

export const ViewersStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  width: 9px;
  height: 9px;
  background: ${colors.red};
  border-radius: 4.5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 2px;
  color: ${colors.black};
`;
