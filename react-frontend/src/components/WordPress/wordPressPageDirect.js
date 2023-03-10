import React, { useState, useEffect, useContext } from 'react';
import { AppConfigContext } from '../../providers/AppConfig';
import { useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { PageContainer} from '../StyleComponents/pageContent';
import { Redirect } from "react-router-dom";
import '../../wordpress.css'
import { StringToJSX } from '../Utils/StringToJSX';

function WordPressPageDirect({id}) {
    let hostName = window.location.hostname;
    // enable this route only for dev/test
    // console.log('hostName: ', hostName);
    if(hostName!='localhost' && hostName!='digital-gov-frontend-test-c0cce6-test.apps.silver.devops.gov.bc.ca' && !id){
        return <Redirect to="/404" />
    }

    const [content, setContent] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    
    const params = useParams();
    let slug=params.slug;

    if (!slug)
        slug = id;
        
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
                        setPageTitle(data['title']['rendered']);
            })
        }
        fetchData();
    },[config])

  return     (
    <DocumentTitle title={pageTitle+" - Digital Government - Province of British Columbia"}>
        <PageContainer style={{'paddingBottom':'0'}}>
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
            <div>
            <StringToJSX domString={content}></StringToJSX>
            </div>
        </PageContainer>
    </DocumentTitle>
  );
}


export default WordPressPageDirect;



// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';


// // import Query from '../Query';

// // import WORDPRESS_QUERY from '../../queries/wordpressContent/wordpress';
// import { StringToJSX } from '../Utils/StringToJSX';
// // import '../../wordpress.css'


// function WordPressStrapi() {
//   const params = useParams();
//   const slug=params.slug;
//   return (
//       <div>
//         <PageContainer>
//           <GlobaStyleSize />
//           <Query query={WORDPRESS_QUERY} uid={slug}>

//             {({ data: { wordpressContents } }) => {
//                 return(
//                     <div>
//                         {wordpressContents?.map((wordpressContent, i) => {
//                             return (
//                               <StringToJSX domString={wordpressContent.HTML}></StringToJSX>
//                             );
//                         })}
//                     </div>
//                 )
                 
//             }}
//           </Query>
//         </PageContainer>
//       </div>
//   );
// }

// export default WordPressStrapi;