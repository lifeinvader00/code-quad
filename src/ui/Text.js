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
  font-size: 15px;
  line-height: calc(15px * 1.414);
  color: ${props => props.theme.colors.textDark};
`;

const CategoryHeader = styled.div`
  font-size: 16px;
  line-height: calc(16px * 1.414);
  font-weight: 700;
  font-family: ${props => props.theme.fonts.sans};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.textExtraDark};
`;

export {
  HeadlineSmall,
  HeadlineLarge,
  Subtitle,
  ParagraphLarge,
  ParagraphSmall,
  CategoryHeader
};
