import React from "react";

import { Container, Count, Subtitle } from "./styles";

const TaskCounter = ({ count, subtitle }) => {
  return (
    <Container>
      <Count>{count}</Count>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default TaskCounter;
