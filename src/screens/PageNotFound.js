import React from "react";
import styled from "styled-components";
import { Container, BackButton } from "../ui";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  min-height: calc(100vh - 3rem);
`;

const PageNotFound = props => {
  return (
    <Wrapper>
      <Container>
        <h2>404 - Page Not Found!</h2>
        <BackButton href="/">Go Home</BackButton>
      </Container>
    </Wrapper>
  );
};

export default PageNotFound;
