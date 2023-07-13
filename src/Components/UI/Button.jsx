import React from "react";
import { styled } from "styled-components";

export const PowerButton = styled.button`
  background-color: transparent;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  cursor: pointer;
`;

function Button() {
  return <PowerButton>버튼</PowerButton>;
}

export default Button;
