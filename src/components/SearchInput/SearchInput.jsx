import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { COLORS } from "../../constants";

const SearchInput = () => {
  return (
    <Wrapper>
      <StyledInput type="text" placeholder="Search..." />
      <SeachIcon id="search" size={16} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  position: relative;

  &:hover {
    color: ${COLORS.white};
  }
`;

const SeachIcon = styled(Icon)`
  position: absolute;
  top: 3px;
`;

const StyledInput = styled.input`
  background-color: ${COLORS.gray[900]};
  border: none;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  color: ${COLORS.white};

  &:hover {
    border-bottom: 1px solid ${COLORS.white};
  }
`;

export default SearchInput;
