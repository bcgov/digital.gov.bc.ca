import React from 'react';
import { useParams } from 'react-router-dom';
import Query from '../Query';
import COMMUNITY_QUERY from '../../queries/community/community';
import DocumentTitle from 'react-document-title';

// import CollapsedMenus from './CoCoPageComponents/collapsedMenus';
// import WhyShouldIUseThis from './CoCoPageComponents/whyShouldIUseThis';
// import Analytics from './CoCoPageComponents/analytics';
// import CoCoBannerSideImage from './CoCoPageComponents/coCoBannerSideImage';
// import CoCoPageNav from './CoCoPageComponents/coCoPageNav';
// import GetStarted from './CoCoPageComponents/getStarted';
// import Support from './CoCoPageComponents/support';
import NotFound from '../NotFoundPage/notFoundPage';

import { PageContainer } from '../StyleComponents/pageContent';

function CoCoPage() {
  const params = useParams();

  return (
    <DocumentTitle title="Community Page">
      <PageContainer>
        <Query query={COMMUNITY_QUERY} uid={params.uid}>
          {({ data: { communityPages } }) => {
            // if (communityPages.length === 0) {
            //   return <NotFound />;
            // }
            console.log(communityPages);
            return <div></div>;
          }}

          {/* {({ data: { community } }) => {
            if (community.length === 0) {
              return <NotFound />;
            }

            return (
              <div>
                {community}
                {/* <CoCoBannerSideImage
                  name={coCos[0]?.Name}
                  description={coCos[0]?.Description}
                  status={coCos[0]?.ProjectStatus?.Status}
                  maintenanceStatus={coCos[0]?.ProjectStatus?.Maintenance}
                  imageurl={coCos[0]?.CoverImage?.url}
                  tags={coCos[0]?.Tags}
                  coCoLink={coCos[0]?.CoCoWebsite}
                />
                <WhyShouldIUseThis
                  whyShouldIUseThis={coCos[0]?.WhyShouldIUseThis}
                />
                <Analytics
                  coCoName={coCos[0]?.Name}
                  numberOfUsers={coCos[0]?.NumberOfUsers}
                  creationDate={coCos[0]?.ComponentCreationDate}
                  whoIsUsingThis={coCos[0]?.WhoIsUsingThis}
                />
                <CollapsedMenus
                  name={coCos[0]?.name}
                  price={coCos[0]?.CostStructure?.PaymentStructure}
                  service={coCos[0]?.ServiceLevelSupport}
                  technicalInfo={coCos[0]?.AdditionalTechnicalInformation}
                  requirements={coCos[0]?.RequirementsAndRestrictions}
                />
                <GetStarted
                  name={coCos[0]?.Name}
                  url={coCos[0]?.GetStartedURL}
                />
                <Support contact={coCos[0]?.Support} /> 
              </div>
            );
          }} */}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default CoCoPage;
