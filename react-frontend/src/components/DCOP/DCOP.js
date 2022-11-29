import ReactMarkdown from 'react-markdown'
import DocumentTitle from 'react-document-title';
import { PageContainer, GlobaStyleSize, ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading, Title } from '../StyleComponents/headings';
import React, { useState, useEffect, useRef  } from 'react';
import { useParams } from 'react-router-dom';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
const dcopImage = require('../../images/pngIllustrations/dcop_transparent.png').default;
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

    const [contents, setContents] = useState('');
    const [title, setTitle] = useState('');
    const [uid, setUid] = useState('');

    if (uid!=params.uid) // only update if changed - otherwise get infinite loop
        setUid(params.uid);

    const cache = useRef({}); // container to hold cached responses to avoid re-fetching when user navigates to previously visited page

    useEffect(() => {
        const fetchData = async () => {
            if (cache.current[md]) {
                const text = cache.current[md];
                setContents(text);
                let tokens = text.split("\n"); // extract page title by looking at first line of markdown and dropping "# "
                setTitle(tokens[0].substring(1));
            }else{
                await fetch(md)
                    .then((r) => r.text())
                        .then(text  => {
                            cache.current[md] = text;
                            setContents(text);
                            let tokens = text.split("\n"); // extract page title by looking at first line of markdown and dropping "# "
                            setTitle(tokens[0].substring(1));
                })
            }
        }
        fetchData();
    },[uid])// make it depend on uid, so fetch happens only if uid changes, otherwise will fetch multiple times for each re-render

    let css=`.offsetAnchor{         /* Need to offset anchor target due to fixed header */
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
    }

    /* overrides due to doing non-standard layout because of markdown parsing */
    .bannerCenterText{
        margin-left: -107px;;
    }
    
    @media screen and (max-width: 800px){
        .bannerCenterText {
            margin-left: -15px;
        }
    }
    
    
    

    `

    let narrowCss= `
    .pageContainer {
        padding-top:0 !important;
        padding-right: 385px; /* make it narrow for better readability */
    }
    @media only screen and (max-width: 768px){
        .pageContainer {
            padding-right: 0px; /* make it narrow for better readability */
        }
    }
    @media only screen and (min-width: 768px){
        .pageContainer {
            padding-right: 168px; /* make it narrow for better readability */
        }
    }
    @media only screen and (min-width: 800px){
        .pageContainer {
            padding-right: 101px; /* make it narrow for better readability */
        }
    }
    @media only screen and (min-width: 992px){
        .pageContainer {
            padding-right: 305px; /* make it narrow for better readability */
        }
    }
    @media only screen and (min-width: 1200px){
        .pageContainer {
            padding-right: 386px; /* make it narrow for better readability */
        }
    }`

    // This block creates a decorated header if we are on the landing page of DCOP
    let titleWas = '';
    let processedTitleBlock=false;
    let processSideImageBanner = function(t){
        if (titleWas==''){
            titleWas=t;
            return null
        }else if (!processedTitleBlock){
            processedTitleBlock=true;
            return true;
        }
        return false;
    }
    let getTitleWas = function(){
        return titleWas;
    }

    return (
        <DocumentTitle title={title+" - Digital Code of Practice - Digital Government - Province of British Columbia"}>
            
            <PageContainer>
                <style>{css}</style>
                <GlobaStyleSize />
                <ReactMarkdown components ={{
                    // 'h1':Title,
                    'p':({node, ...props}) => {
                        if (params.uid){ // not on landing page
                            return <p>{props.children}</p>
                        }else{ // is on landing page
                            let r = processSideImageBanner(null);
                            if (r)
                                return <BannerSideImage
                                title={
                                    getTitleWas()
                                }
                                content={
                                    props.children
                                }
                                image={dcopImage}/>
                            else
                                return <p>{props.children}</p>
                        }                                                    
                    },
                    'h1':({node, ...props}) => {
                        if (!params.uid){ // on landing page
                            processSideImageBanner(props.children[0]);
                            return false; // do not render title at all - will handle when first paragraph is received
                        }else{ // not on landing page
                            return <Title>{props.children[0]}</Title>
                        }
                    },
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
                }} children={contents}></ReactMarkdown>
            </PageContainer>
        </DocumentTitle>
    )
}

export default DCOP;
