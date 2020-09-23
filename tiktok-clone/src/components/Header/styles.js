import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 22px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 1;
`;

export const Text = styled.Text`
  color: #fff;
  letter-spacing: 0.8px;
  margin: 11px 12px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  opacity: ${({ isBold }) => (isBold ? 1 : 0.8)};
  font-size: ${({ isBold }) => (isBold ? "16px" : "15px")};
`;

export const Separator = styled.View`
  width: 1px;
  height: 13px;
  background-color: #d8d8d8;
  opacity: 0.6;
`;
