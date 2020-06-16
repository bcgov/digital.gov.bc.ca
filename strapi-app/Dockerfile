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
COPY package-lock.json ./
COPY yarn.lock ./

# add bash to the image
RUN apk add --no-cache bash

RUN yarn install



# add app
COPY . ./

# start app
CMD ["yarn","start"]