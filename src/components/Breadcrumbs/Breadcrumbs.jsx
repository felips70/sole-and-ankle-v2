import React from "react";
import styled from "styled-components";

const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export default Breadcrumbs;
