FROM cypress/included:4.12.0
# RUN npm install @badeball/cypress-cucumber-preprocessor
RUN npm install cypress-cucumber-preprocessor@^4.3.1

# pass base url to test pointing at the web application
ENV CYPRESS_baseUrl=http://host.docker.internal:3000
# do not record videos
ENV CYPRESS_VIDEO=false

# WORKDIR /app
COPY  cypress.json .
COPY  package.json .
COPY  cypress cypress/

# RUN cd ..
# run npm install

# RUN echo $(pwd)

# RUN echo "CONTENTS:"
# RUN echo $(ls cypress/integration/home_cuc)
# 
RUN cypress run
# ENTRYPOINT ["cypress", "run"]