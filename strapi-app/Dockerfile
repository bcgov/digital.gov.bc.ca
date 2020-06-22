# pull official base image
FROM node:12.17.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

# add bash to the image
RUN apk add --no-cache bash

# The default time out is far to short for openshift to install dependancies properly
RUN yarn install --network-timeout=600000

# add app
COPY . ./

# start app
CMD ["yarn","start"]