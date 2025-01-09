import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

function Categories() {
  return (
    <Wrapper>
      <CategoryItem>Lifestyle</CategoryItem>
      <CategoryItem>Jordan</CategoryItem>
      <CategoryItem selected>Running</CategoryItem>
      <CategoryItem>Basketball</CategoryItem>
      <CategoryItem>Training & Gym</CategoryItem>
      <CategoryItem>Football</CategoryItem>
      <CategoryItem>Skateboarding</CategoryItem>
      <CategoryItem>American</CategoryItem> Football
      <CategoryItem>Baseball</CategoryItem>
      <CategoryItem>Golf</CategoryItem>
      <CategoryItem>Tennis</CategoryItem>
      <CategoryItem>Athletics</CategoryItem>
      <CategoryItem>Walking</CategoryItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin-top: 24px;
  font-weight: ${WEIGHTS.medium};
  font-size: 16px;
  color: ${COLORS.gray[900]};
  list-style-type: none;
`;

const CategoryItem = styled.li`
  color: ${(p) => (p.selected ? COLORS.primary : "inherit")};
  line-height: 32px;
`;

export default Categories;
