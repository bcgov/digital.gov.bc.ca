# pull official base image
FROM node:12.17.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# add bash to the image
RUN apk add --no-cache bash  && apk add --no-cache curl 

# Try adding the mongo tools here
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb=3.4.4-r0


# install app dependencies
COPY package.json ./

COPY yarn.lock ./
# create a .cache folder and give it read and write permission
# RUN yarn config set cache-folder ./  && yarn install --network-timeout=600000

RUN yarn install --network-timeout=600000

# mkdir -p /.cache && chmod 666 -R /.cache

# # attempt to remove access permissions 
# RUN chmod 777 -R ./

# # The default time out is far to short for openshift to install dependancies properly
# RUN yarn install --network-timeout=600000


# add app
COPY . ./

# start app
CMD ["yarn","start"]  