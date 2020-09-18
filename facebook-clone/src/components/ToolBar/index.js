import React from "react";

import Avatar from "../Avatar";
import ToolBarMenu from "../ToolBarMenu";

import { Container, Row, Input, Divider, BottomDivider } from "./styles";

const ToolBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Avatar source={require("../../../assets/user1.jpg")} />
          <Input placeholder="What's on your mind?" />
        </Row>

        <Divider />

        <Row>
          <ToolBarMenu />
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
