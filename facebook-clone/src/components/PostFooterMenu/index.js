import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Button, Icon, Text } from "./styles";

const PostFooterMenu = () => {
  return (
    <Container>
      <Button>
        <Icon>
          <AntDesign name="like2" size={20} color="#424040" />
        </Icon>
        <Text>Like</Text>
      </Button>

      <Button>
        <Icon>
          <MaterialCommunityIcons
            name="comment-outline"
            size={20}
            color="#424040"
          />
        </Icon>
        <Text>Comment</Text>
      </Button>

      <Button>
        <Icon>
          <MaterialCommunityIcons
            name="share-outline"
            size={20}
            color="#424040"
          />
        </Icon>
        <Text>Share</Text>
      </Button>
    </Container>
  );
};

export default PostFooterMenu;
