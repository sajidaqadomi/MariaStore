import styled, { css } from "styled-components";

export const selectedStyles = css`
  transform: scale(1.1);
  box-shadow: 0 7px 16px 0px rgba(0, 0, 0, 0.25);
  
  outline-offset: 1px;
  outline: 1px solid black;
`;

export const FilterColor = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    transform: scale(1.1);
  }
  &:hover {
    ${selectedStyles}
  }
  // If the active property is set add the hoverStyles
  ${(props) => props.selected && selectedStyles}
`;