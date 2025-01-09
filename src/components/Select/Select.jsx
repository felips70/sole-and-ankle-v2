import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <ChevronDown />
      <SelectBox value={value} onChange={onChange}>
        {children}
      </SelectBox>
      <CustomSelect>{displayedValue}</CustomSelect>
    </SelectWrapper>
  );
};

const ChevronDown = styled(Icon).attrs((p) => ({
  id: "chevron-down",
  strokeWidth: 2,
}))`
  position: absolute;
  top: 12px;
  right: 5px;
  /* pointer-events allows us to modify the behaviour of pointer events for the element being styled. 
  In the case of none it makes the browser ignore all pointer events */
  // The reason it's commented out is that SelectWrapper is stacked on top of the ChevronDown so we don't need to worry about events for ChevronDown
  /* pointer-events: none; */
`;

const SelectWrapper = styled.div`
  /* This position: relative makes it so the chevron-down is rendered behind 
  the select which allows for opening the select options when the chevron is clicked */
  position: relative;
  color: ${COLORS.gray[900]};
  font-size: 1rem;
  font-weight: ${WEIGHTS.medium};
  width: fit-content;
`;

const SelectBox = styled.select`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

const CustomSelect = styled.div`
  padding: 12px 40px 12px 16px;
  background-color: ${COLORS.gray[100]};
  border-radius: 8px;
  border: none;

  ${SelectBox}:focus + & {
    outline: 1px dotted ${COLORS.gray[700]};
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
