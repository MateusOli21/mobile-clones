import React from "react";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import User from "../User";

import { Container, Room, Text, BottomDivider } from "./styles";

const Users = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <Room>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#e141fc"
            />
            <Text>Create room</Text>
          </Room>

          <User imgSrc={require("../../../assets/user2.jpg")} isOnline={true} />
          <User imgSrc={require("../../../assets/user3.jpg")} />
          <User imgSrc={require("../../../assets/user4.jpg")} isOnline={true} />
          <User imgSrc={require("../../../assets/user2.jpg")} isOnline={true} />
          <User imgSrc={require("../../../assets/user3.jpg")} />
          <User imgSrc={require("../../../assets/user4.jpg")} isOnline={true} />
          <User imgSrc={require("../../../assets/user2.jpg")} isOnline={true} />
          <User imgSrc={require("../../../assets/user3.jpg")} />
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Users;
