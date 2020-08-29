import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import creditCard from "../../assets/credit-card.png";

import {
  Wrapper,
  Header,
  HeaderContainer,
  BalanceContainer,
  Value,
  Title,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddLabel,
  AddButton,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";

export default function Wallet() {
  const [visible, setVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setVisible((prevstate) => !prevstate);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevstate) => !prevstate);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{visible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={visible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={26} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={18} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>

              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quanndo não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
