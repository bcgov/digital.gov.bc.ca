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

  h2 {
    font-size: 31px;
    font-weight: 700;
    line-height: 1.6;
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.6;
  }

  h4 {
    font-size: 21.60px;
    font-weight: 700;
    line-height: 1.6;
  }

  blockquote {
    border-left: 4px solid #000;
    font-weight: 700;
    padding-left: 16px
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
