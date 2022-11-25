import ReactMarkdown from 'react-markdown'
import DocumentTitle from 'react-document-title';
import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { Heading, Title } from '../StyleComponents/headings';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import md0 from '../../documents/DCOP/markdown/0.md';
import md1 from '../../documents/DCOP/markdown/1.md';
import md2 from '../../documents/DCOP/markdown/2.md';
import md3 from '../../documents/DCOP/markdown/3.md';
import md4 from '../../documents/DCOP/markdown/4.md';
import md5 from '../../documents/DCOP/markdown/5.md';
import md6 from '../../documents/DCOP/markdown/6.md';
import md7 from '../../documents/DCOP/markdown/7.md';
import md8 from '../../documents/DCOP/markdown/8.md';
import md9 from '../../documents/DCOP/markdown/9.md';
import md10 from '../../documents/DCOP/markdown/10.md';
import { HrefLink,HrefLinkInternal } from '../StyleComponents/htmlTags';

function DCOP(props) {
    const params = useParams();
    let md = null;
    switch(params.uid) {
        case "design-with-people":
          md = md1;
          break;
        case "embed-inclusion":
            md = md2;
            break;
        case "integrate-ethics":
            md = md3;
            break;
        case "continuously-learn-and-improve":
            md = md4;
            break;
        case "work-in-the-open":
            md = md5;
            break;
        case "take-an-ecosystem-approach":
            md = md6;
            break;
        case "take-care-of-information-and-data":
            md = md7;
            break;
        case "manage-risks-proportionately":
            md = md8;
            break;
        case "build-diverse-teams-and-internal-capacity":
            md = md9;
            break;
        case "express-cultural-and-historical-awareness":
            md = md10;
            break;
        default:
            md = md0;
      }

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    fetch(md)
        .then((r) => r.text())
            .then(text  => {
                setContent(text);
                let tokens = text.split("\n");
                setTitle(tokens[0].substring(1));
    })
    let css=`.offsetAnchor{
        margin-top: -107px;        /* Size of fixed header */
        padding-bottom: 107px; 
        display: block; 
    }
    @media screen and (max-width: 600px) {
        .offsetAnchor{
            margin-top: -65px;  /* Size of fixed header */
            padding-bottom: 65px; 
            display: block; 
        }
    }`

    return (
        <DocumentTitle title={title+" - Digital Code of Practice - Digital Government - Province of British Columbia"}>
            
            <PageContainer>
                <style>{css}</style>
                <GlobaStyleSize />
                <ReactMarkdown components ={{
                    'h1':Title,
                    'h2': ({node, ...props}) => {
                        let slug = props.children[0].replace(/ /g,'-')
                        return(
                        <Heading>
                            {/* Need to offset anchor target due to fixed header */}
                            <span className="offsetAnchor" id={slug}></span>
                            {props.children[0]}
                        </Heading>
                        )
                    },
                    'a': ({node, ...props}) => {
                        if (props.href.substring(0,1)=="/")
                            // internal  links need to be handled differently in order for SPA experience to work, otherwise reloads the page
                            return(
                                <HrefLinkInternal to={props.href}>
                                {props.children[0]}
                                </HrefLinkInternal>
                                
                            )
                        else
                            return(
                                <HrefLink href={props.href}>
                                    {props.children[0]}
                                </HrefLink>
                            )
                    }
                }} children={content}></ReactMarkdown>
            </PageContainer>
        </DocumentTitle>
    )
}

export default DCOP;
