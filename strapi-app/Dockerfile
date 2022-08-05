FROM docker.io/node:14.19.1-alpine3.15
# The openshift pipeline requires an image pulled through artifactory
# FROM docker-remote.artifacts.developer.gov.bc.ca/node:lts-alpine

RUN apk --no-cache add --virtual native-deps \
    binutils-gold curl expat-dev g++ gcc glib glib-dev gnupg gobject-introspection-dev libgcc libstdc++ libuv linux-headers make meson pkgconfig python2 python3 zlib && \
    npm install node-gyp -g

WORKDIR /app

COPY . ./

RUN curl -o vips-8.13.0.tar.gz -L https://github.com/libvips/libvips/releases/download/v8.13.0/vips-8.13.0.tar.gz

RUN tar xf vips-8.13.0.tar.gz && \
    cd vips-8.13.0 && \
    meson setup /app/vips-8.13.0-build && \
    cd /app/vips-8.13.0-build && \
    ninja && \
    ninja install

# Install dependencies
RUN yarn install --production && \
  cd plugins/wysiwyg/ && \
  yarn install --production --network-timeout=600000

RUN chmod -R 777 /app/public/uploads/

RUN yarn build
# start app
CMD ["yarn","start"]