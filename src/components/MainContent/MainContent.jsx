import React from "react";
import styled from "styled-components";
import Breadcrumbs from "../Breadcrumbs";
import Crumb from "../Crumb";
import Categories from "../Categories/Categories";
import { COLORS, WEIGHTS } from "../../constants";
import Select from "../Select/Select";
import ShoeCard from "../ShoeCard/ShoeCard";
import SHOES from "../../data";

const MainContent = () => {
  return (
    <Wrapper>
      <Sidebar>
        <Breadcrumbs>
          <Crumb href="/">Home</Crumb>
          <Crumb href="/">Sale</Crumb>
          <Crumb href="/">Shoes</Crumb>
        </Breadcrumbs>
        <Categories />
      </Sidebar>
      <ShoesContent>
        <ContentHeader>
          <ContentTitle>Running</ContentTitle>
          <SelectLabel htmlFor="sort">Sort</SelectLabel>
          <Select id="sort">
            <option>Newest Releases</option>
          </Select>
        </ContentHeader>
        <ShoeGrid>
          {SHOES.map((shoe) => (
            <ShoeCard key={shoe.slug} shoe={shoe} />
          ))}
        </ShoeGrid>
      </ShoesContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  padding-top: 0;
  display: flex;
  padding-top: 64px;
`;

const Sidebar = styled.div`
  flex: 1;
`;

const ShoesContent = styled.div`
  flex: 4;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ContentTitle = styled.p`
  margin-right: auto;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: 24px;
`;

const SelectLabel = styled.label`
  color: ${COLORS.gray[700]};
`;

const ShoeGrid = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

export default MainContent;
