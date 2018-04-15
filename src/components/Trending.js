import React, { Component } from "react";
import styled from "styled-components";
import { CategoryHeader, ParagraphSmall, HeadlineLarge } from "../ui/Text";

const Wrapper = styled.section`
  width: 100%;
`;

const Header = styled.header`
  padding: 10px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Primary = styled.div`
  flex-basis: calc(60% - 20px);
  margin-right: 20px;
  border: none;
  padding: 10px 0;
`;

const Secondary = styled.div`
  flex-basis: calc(40% - 20px);
  margin-left: 20px;
  border: none;
  padding: 10px 0;
`;

const Article = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Image = styled.img`
  flex-basis: 50%;
  border: none;
  height: 250px;
`;

const Body = styled.div`
  flex-basis: 50%;
  border: none;
  padding: 10px;
`;

const Meta = styled.div`
  p {
    font-family: ${props => props.theme.fonts.sans};
    text-transform: capitalize;
    font-size: ${props => props.theme.text.xs};
    color: ${props => props.theme.colors.textLight};
    margin: 10px 0;
    span {
      margin-right: 5px;
      font-weight: 700;
    }
  }
`;

const Text = styled.div``;

class Trending extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Header>
          <CategoryHeader>Trending</CategoryHeader>
        </Header>
        <Content>
          <Primary>
            <Article>
              <Image src="https://www.fillmurray.com/250/250" alt="" />
              <Body>
                <HeadlineLarge>This is a headline</HeadlineLarge>
                <Meta>
                  <p>
                    <span>Date: </span>12th April,2017
                  </p>
                </Meta>
                <Text>
                  <ParagraphSmall>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    blanditiis ad debitis.{" "}
                  </ParagraphSmall>
                </Text>
              </Body>
            </Article>
          </Primary>
          <Secondary>Secondary News Articles Holder</Secondary>
        </Content>
      </Wrapper>
    );
  }
}

export default Trending;
