import React, { Component } from "react";
import styled from "styled-components";
import { CategoryHeader, ParagraphSmall, HeadlineSmall } from "../ui/Text";

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
    font-family: ${props => props.theme.fonts.narrow};
    text-transform: capitalize;
    font-size: 15px;
    line-height: calc(15px * 1.414);
    color: ${props => props.theme.colors.textLight};
    margin: 10px 0;
    font-weight: 400;
    word-spacing: 2px;
    span {
      margin-right: 5px;
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
                <HeadlineSmall>
                  Them Forth Bring Meat Creature Heaven
                </HeadlineSmall>
                <Meta>
                  <p>
                    <span>Date: </span>12th April 2017
                  </p>
                </Meta>
                <Text>
                  <ParagraphSmall>
                    You&#39;ll seed won&#39;t days that he whose whales evening
                    light behold whose brought gathering male lights without
                    above forth saw, greater, signs subdue is there winged
                    together first. Darkness likeness.
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
