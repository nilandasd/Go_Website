import React from "react";
import styled from "styled-components";

const StyledNotFound = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  font-size: 5vw;
`;

const NotFound = () => {
  return <StyledNotFound>404 Not Found</StyledNotFound>;
};

export default NotFound;
