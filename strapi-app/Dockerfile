FROM docker.io/node:14.19.1-alpine3.15
# The openshift pipeline requires an image pulled through artifactory
# FROM docker-remote.artifacts.developer.gov.bc.ca/node:lts-alpine

WORKDIR /app

COPY . ./

# Install dependencies
RUN yarn install --production && \
  cd plugins/wysiwyg/ && \
  yarn install --production --network-timeout=600000 

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["yarn","start"]  