import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: ${props => props.theme.button.margin};
  padding: ${props => props.theme.button.margin};
  background: ${props => props.theme.colors.default};
  border: ${props => `1px solid ${props.theme.colors.default}`};
  border-radius: 4px;
  box-shadow: ${props => props.theme.button.shadow};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.pts};
  font-size: 1rem;
  line-height: 1.414 * 1rem;
  text-shadow: none;
  &:hover {
    background: ${props => props.theme.colors.defaultDark};
    border: ${props => `1px solid ${props.theme.colors.defaultDark}`};
    box-shadow: ${props => props.theme.button.shadowDark};
  }
`;

const Back = Button.withComponent("a");

const BackButton = Back.extend`
  text-decoration: none;
`;

export { Button, BackButton };
