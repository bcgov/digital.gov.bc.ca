import React from 'react';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

export const StyleRichText = ({ htmlOrMarkdown }) => {
  // Detect html tags
  const re = /<.+?>/;
  // If the string has html tags, return parsed html
  if (re.test(htmlOrMarkdown)) {
    return <ParsedHTMLStyled> {parse(htmlOrMarkdown)} </ParsedHTMLStyled>;
  }
  // If there are no html tags detected treat the string as markdown
  return <ReactMarkdownStyled source={htmlOrMarkdown} />;
};

export const ParsedHTMLStyled = styled.div.attrs({
  className: 'parsedHTML',
})`
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

export const ReactMarkdownStyled = styled(ReactMarkdown).attrs({
  className: 'parsedMarkdown',
})`
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
