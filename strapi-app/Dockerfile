# # pull official strapi image
# FROM strapi/strapi:3.0.0

# CMD []



# pull official base image
FROM node:12.17.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
COPY yarn.lock ./

# add bash to the image
RUN apk add --no-cache bash

# remove yarn proxy to enable package install
# RUN npm config rm proxy
# RUN npm config rm https-proxy
# RUN cache clean
RUN yarn 
# RUN yarn install --network-timeout=60000



# add app
COPY . ./

# start app
CMD ["yarn","start"]