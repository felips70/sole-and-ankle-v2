import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

const NavBar = () => {
  return (
    <Wrapper>
      <Logo>Sole&Ankle</Logo>
      <NavLinks>
        <NavLink selected>SALE</NavLink>
        <NavLink>NEW RELEASES</NavLink>
        <NavLink>MEN</NavLink>
        <NavLink>WOMEN</NavLink>
        <NavLink>KIDS</NavLink>
        <NavLink>COLLECTIONS</NavLink>
      </NavLinks>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 24px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  position: sticky;
  left: 210px;
  font-weight: ${WEIGHTS.medium};
`;

const Logo = styled.p`
  font-weight: ${WEIGHTS.bold};
  font-size: 24px;
  position: absolute;
  top: 18px;
  left: 32px;
`;

const NavLink = styled.a`
  font-size: 18px;
  text-wrap: nowrap;
  color: ${(p) => (p.selected ? COLORS.secondary : COLORS.gray[900])};
`;

export default NavBar;
