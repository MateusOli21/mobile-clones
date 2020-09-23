import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 0 0 70px 13px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  color: rgba(255, 255, 255, 1);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

export const Checked = styled.Image`
  width: 16px;
  height: 16px;
  margin: 0 5px;
`;

export const Description = styled.Text`
  width: 80%;
  margin-top: 6px;
  font-size: 17px;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Music = styled.Text`
  width: 80%;
  margin-top: 13px;
  font-size: 15px;
  color: #fff;
`;
