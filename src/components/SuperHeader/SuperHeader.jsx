import React from "react";
import Icon from "../Icon";

import styled from "styled-components";
import { COLORS } from "../../constants";
import SearchInput from "../SearchInput/SearchInput";

const SuperHeader = () => {
  return (
    <Wrapper>
      <ShippingMessage>
        Free shipping on domestic orders over %75!
      </ShippingMessage>
      <SearchInput />
      <HelpBtn>Help</HelpBtn>
      <Icon id="shopping-bag" />
    </Wrapper>
  );
};

const ShippingMessage = styled.p`
  margin-right: auto;
  color: ${COLORS.white};
  line-height: 24px;
`;

const HelpBtn = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;

  &:hover {
    color: ${COLORS.white};
  }
`;

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  padding: 8px 32px;
  display: flex;
  gap: 24px;
  font-size: 14px;
`;

export default SuperHeader;
