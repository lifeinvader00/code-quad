import React, { Component } from "react";
import styled from "styled-components";
import { Trending } from "../components";
import { Container } from "../ui";

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 40px);
  margin: 0;
  padding: 20px 0;
`;

class Home extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <Trending />
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
