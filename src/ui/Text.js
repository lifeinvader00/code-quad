import styled from "styled-components";

const Headline = styled.h2`
  font-weight: ${props => props.theme.text.bold};
  word-spacing: 2px;
`;

const HeadlineSmall = Headline.extend`
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.text.xl};
  line-height: ${props => `calc(${props.theme.text.xl} * 1.414)`};
`;

const HeadlineLarge = Headline.extend`
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.text.xxl};
  line-height: ${props => `calc(${props.theme.text.xxl} * 1.414)`};
`;

const Subtitle = styled.h3`
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.text.l};
  line-height: ${props => `calc(${props.theme.text.l} * 1.414)`};
  font-weight: ${props => props.theme.text.light};
  font-style: italic;
  word-spacing: 2px;
`;

const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.serif};
  margin: 0 0 1rem 0;
  word-spacing: 2px;
`;

const ParagraphLarge = Paragraph.extend`
  font-size: 16px;
  line-height: calc(16px * 1.414);
`;

const ParagraphSmall = Paragraph.extend`
  font-size: 13.5px;
  line-height: calc(13.5px * 1.414);
`;

export {
  HeadlineSmall,
  HeadlineLarge,
  Subtitle,
  ParagraphLarge,
  ParagraphSmall
};
