FROM docker.io/node:12.22.7-alpine3.12
# The openshift pipeline requires an image pulled through artifactory
# FROM docker-remote.artifacts.developer.gov.bc.ca/node:lts-alpine

ENV DIR=/app

WORKDIR ${DIR}

COPY . ./

RUN chown -R node:node ${DIR}

# Install dependencies
RUN yarn install --production && \
  cd plugins/wysiwyg/ && \
  yarn install --production --network-timeout=600000 

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["yarn","start"]  