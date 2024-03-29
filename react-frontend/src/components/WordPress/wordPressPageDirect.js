import React, { useState, useEffect, useContext } from 'react';
import { AppConfigContext } from '../../providers/AppConfig';
import { useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { PageContainer} from '../StyleComponents/pageContent';
import { Redirect } from "react-router-dom";
import '../../wordpress.css'

function WordPressPageDirect() {
    let hostName = window.location.hostname;
    // enable this route only for dev/test
    console.log('hostName: ', hostName);
    if(hostName!='localhost' && hostName!='digital-gov-frontend-test-c0cce6-test.apps.silver.devops.gov.bc.ca'){
        return <Redirect to="/404" />
    }

    const [content, setContent] = useState('');
    const params = useParams();
    const slug=params.slug;
    // console.log('slug: ', slug);
    const config = useContext(AppConfigContext);
    
    const wordpressUrl = config['state']['wordpressUrl'];
    // console.log('config: ', config, config['state']['wordpressUrl']);
    // console.log(wordpressUrl);
    // if (!wordpressUrl)
    //     return null;

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetching..')
            // await fetch(`https://wordpress-prod.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages/${slug}`)// ?slug=${slug}`)
            await fetch(wordpressUrl+`wp-json/wp/v2/pages/${slug}`)// ?slug=${slug}`)
                .then((r) => r.json())
                    .then(data  => {
                        console.log('response: ', data);
                        setContent(data.content.rendered);
            })
        }
        fetchData();
    },[config])

  return     (
    <DocumentTitle title="Products & Services - Digital Government - Province of British Columbia">
        <PageContainer>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </PageContainer>
    </DocumentTitle>
  );
}


export default WordPressPageDirect;