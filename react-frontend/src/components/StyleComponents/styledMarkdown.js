import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const ReactMarkdownStyled = styled(ReactMarkdown)`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  a {
    color: #1a5a96;
    text-decoration: underline;
    :focus {
      outline: -webkit-focus-ring-color auto 5px;
    }
    :hover {
      color: blue;
      text-decoration: none;
    }
  }
`;
