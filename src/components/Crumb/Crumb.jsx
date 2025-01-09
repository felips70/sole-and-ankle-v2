import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Crumb = ({ children, href }) => {
  return (
    <CrumbItem>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbItem>
  );
};

const CrumbItem = styled.li`
  display: inline;

  &:not(:first-of-type)::before {
    content: "/";
    color: ${COLORS.gray[300]};
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

export default Crumb;
