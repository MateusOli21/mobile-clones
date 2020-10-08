import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: 100%;
  top: -58px;
  z-index: -100;
`;

export const RightCircle = styled.View`
  width: 400px;
  height: 400px;
  position: absolute;
  right: -100px;
  top: -200px;
  border-radius: 200px;
  background-color: #8022d9;
`;

export const LeftCircle = styled.View`
  width: 200px;
  height: 200px;
  position: absolute;
  left: -50px;
  top: -50px;
  border-radius: 100px;
  background-color: #23a6d5;
`;
