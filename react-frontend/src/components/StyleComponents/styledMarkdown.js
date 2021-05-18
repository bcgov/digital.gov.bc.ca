import React, { useContext } from 'react';
import { AppConfigContext } from '../../providers/AppConfig';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

export const StyleRichText = ({ htmlOrMarkdown }) => {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];
  // Detect html tags
  const re = /<.+?>/;

  // If the string has html tags, return parsed html
  if (re.test(htmlOrMarkdown)) {
    // //Find and replace /upload with the proper strapi url
    const options = {
      replace: ({ attribs, children }) => {
        if (!attribs) {
          return;
        }
        //if the attribute has a source it is an image, this replaces that image src
        //with a valid url
        if (attribs.src) {
          return <img src={strapiMediaUrl + attribs.src} alt={attribs.alt} />;
        }
      },
    };
    return (
      <ParsedHTMLStyled> {parse(htmlOrMarkdown, options)} </ParsedHTMLStyled>
    );
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
    font-size: 21.6px;
    font-weight: 700;
    line-height: 1.6;
  }

  blockquote {
    border-left: 4px solid #000;
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    padding-left: 16px;
    p {
      font-size: 22px;
    }
  }

  figcaption {
    color: #606060;
    text-align: center;
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 12.8px;
    font-style: italic;
    margin: 16px 0;
  }

  img {
    width: 100%;
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
