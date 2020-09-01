import React from "react";

import {
  Container,
  CategoryImg,
  CategoryName,
  ViewersStatus,
  RedCircle,
  Info,
} from "./styles";

interface CategoryItemProps {
  item: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <Container>
      <CategoryImg source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>

      <ViewersStatus>
        <RedCircle />
        <Info>50.5k</Info>
      </ViewersStatus>
    </Container>
  );
};

export default CategoryItem;
