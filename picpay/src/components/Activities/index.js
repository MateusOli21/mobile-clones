import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import avatar from "../../assets/avatar.png";

import {
  Container,
  Header,
  Title,
  Avatar,
  Card,
  CardHeader,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  OptionLabel,
  Option,
} from "./styles";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Activities</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@mateusoli</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Mateus Oliveira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>RS20,00</Value>

            <Divider />

            <Feather name="lock" size={14} color="#fff" />
            <Date>há 2 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
