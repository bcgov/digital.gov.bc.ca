import React from 'react';
import { useParams } from 'react-router-dom';
import Query from '../Query';
import COCO_QUERY from '../../queries/coCos/coCo';

import DocumentTitle from 'react-document-title';

function CoCoPage() {
  const params = useParams();
  return (
    <DocumentTitle title="Common Components - Digital Government - Province of British Columbia">
      <div>
        <p>This is the coco page {params.uid} </p>
        <Query query={COCO_QUERY} uid={params.uid}>
          {({ data: { coco } }) => {
            return (
              <div>
                <img
                  src={
                    process.env.REACT_APP_STRAPI_BACKEND_URL +
                    coco?.CoverImage.url
                  }
                />
                <p>Test that query runs</p>
              </div>
            );
          }}
        </Query>
      </div>
    </DocumentTitle>
  );
}

export default CoCoPage;
