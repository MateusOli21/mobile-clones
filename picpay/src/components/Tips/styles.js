import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.View`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 200px;
  justify-content: space-between;
  border-radius: 8px;
  padding: 18px 12px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
