# pull official base image
FROM docker.io/node:lts-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add bash to the image
RUN apk add --no-cache bash

# add app
COPY . ./

# start app
CMD ["npm", "start"]