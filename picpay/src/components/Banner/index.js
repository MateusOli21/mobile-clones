import React from "react";

import img13 from "../../assets/13.png";

import { Container, Details, Description, Title, Img } from "./styles";

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
