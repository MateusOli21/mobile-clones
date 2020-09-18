import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Text, Row, Button } from "./styles";

const AppBar = () => {
  return (
    <Container>
      <Text>facebook</Text>
      <Row>
        <Button>
          <Feather name="search" size={29} color="black" />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={29}
            color="black"
          />
        </Button>
      </Row>
    </Container>
  );
};

export default AppBar;
