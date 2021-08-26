# pull official base image
# If local builds are failing, try pulling directly from docker
# FROM node:12.22.1-alpine3.12
# The openshift pipeline requires an image pulled through artifactory
FROM strapi/strapi:3.0.0

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

# add app
COPY . ./

# The default time out is far to short for openshift to install dependancies properly
# Install the plugin npm packages
RUN cd plugins/wysiwyg/ && \
  yarn install && \
  cd ../../ && \
  yarn install --network-timeout=600000

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["strapi","develop"]  