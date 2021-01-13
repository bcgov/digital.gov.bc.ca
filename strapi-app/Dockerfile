# pull official base image
FROM node:12.17.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

# The default time out is far to short for openshift to install dependancies properly
RUN yarn install --network-timeout=600000

# add app
COPY . ./

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["yarn","start"]  