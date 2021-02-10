import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const ReactMarkdownStyled = styled(ReactMarkdown)`
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
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

export const MarkdownStyles = styled.div`
  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 30px;
  }

  & > h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 30px;
  }

  & > h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 30px;
  }

  & > h4 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 28px;
  }
`;
