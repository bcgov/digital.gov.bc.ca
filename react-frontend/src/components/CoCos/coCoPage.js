import React from 'react';
import { useParams } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import Query from '../Query';
import COCO_QUERY from '../../queries/coCos/coCo';
import DocumentTitle from 'react-document-title';

import CollapsedMenus from './CoCoPageComponents/collapsedMenus';
import WhyShouldIUseThis from './CoCoPageComponents/whyShoulIUseThis';
import Analytics from './CoCoPageComponents/analytics';
import CoCoBannerSideImage from './CoCoPageComponents/coCoBannerSideImage';
import CoCoPageNav from './CoCoPageComponents/coCoPageNav';
import GetStarted from './CoCoPageComponents/getStarted';
import Support from './CoCoPageComponents/support';
import NotFound from '../NotFoundPage/notFoundPage';

import { PageContainer } from '../StyleComponents/pageContent';

function CoCoPage() {
  const params = useParams();
  const ScrollElement = Scroll.Element;

  return (
    <DocumentTitle title="Common Components - Digital Government - Province of British Columbia">
      <PageContainer>
        <Query query={COCO_QUERY} uid={params.uid}>
          {({ data: { coCos } }) => {
            if (coCos.length === 0) {
              return <NotFound />;
            }

            return (
              <div>
                <CoCoPageNav
                  location1="overview"
                  location2="whoIsUsing"
                  location3="about"
                  location4="getStarted"
                  location5="support"
                  name={coCos[0]?.Name}
                />
                <ScrollElement name="overview" className="element" />
                <CoCoBannerSideImage
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
                <ScrollElement name="whoIsUsing" className="element" />
                <Analytics
                  coCoName={coCos[0]?.Name}
                  numberOfUsers={coCos[0]?.NumberOfUsers}
                  creationDate={coCos[0]?.ComponentCreationDate}
                  whoIsUsingThis={coCos[0]?.WhoIsUsingThis}
                />
                <ScrollElement name="about" className="element" />
                <CollapsedMenus
                  name={coCos[0]?.name}
                  price={coCos[0]?.CostStructure?.PaymentStructure}
                  service={coCos[0]?.ServiceLevelSupport}
                  technicalInfo={coCos[0]?.AdditionalTechnicalInformation}
                  requirements={coCos[0]?.RequirementsAndRestrictions}
                />
                <ScrollElement name="getStarted" className="element" />
                <GetStarted
                  name={coCos[0]?.Name}
                  url={coCos[0]?.GetStartedURL}
                />
                <ScrollElement name="support" className="element" />
                <Support contact={coCos[0]?.Support} />
              </div>
            );
          }}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default CoCoPage;
