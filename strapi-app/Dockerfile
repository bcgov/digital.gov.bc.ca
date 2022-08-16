# needs to be in two places so that global scope links to local scope
FROM docker.io/node:14.19.1-alpine3.15
ARG applem1=0

RUN if [ "$applem1" = 1 ]; then echo "RUNNING APPLE M1 OVERRIDE"; else echo "Apple M1 override is OFF"; fi;
# The openshift pipeline requires an image pulled through artifactory
# FROM docker-remote.artifacts.developer.gov.bc.ca/node:lts-alpine

# Get build tools to build vips 8.13 in order to run on Apple M1
# TODO: remove if upgraded from strapi3
RUN if [ "$applem1" = 1 ]; then apk --no-cache add --virtual native-deps \
    binutils-gold curl expat-dev g++ gcc glib glib-dev gnupg gobject-introspection-dev libgcc libstdc++ libuv linux-headers make meson pkgconfig python2 python3 zlib && \
    npm install node-gyp -g; else echo ""; fi;

WORKDIR /app

COPY . ./

# TODO: remove if upgraded from strapi3 (Apple M1 fix)
RUN if [ "$applem1" = 1 ]; then curl -o vips-8.13.0.tar.gz -L https://github.com/libvips/libvips/releases/download/v8.13.0/vips-8.13.0.tar.gz; else echo ""; fi;

# TODO: remove if upgraded from strapi3 (Apple M1 fix)
RUN if [ "$applem1" = 1 ]; then tar xf vips-8.13.0.tar.gz && \
    cd vips-8.13.0 && \
    meson setup /app/vips-8.13.0-build && \
    cd /app/vips-8.13.0-build && \
    ninja && \
    ninja install; else echo ""; fi;

# Install dependencies
RUN yarn install --production && \
  cd plugins/wysiwyg/ && \
  yarn install --production --network-timeout=600000

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["yarn","start"]