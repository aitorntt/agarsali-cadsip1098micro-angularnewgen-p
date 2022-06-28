# We label our stage as ‘builder’
ARG CR_URL
FROM $CR_URL/node:10-alpine as builder
ARG COMPILE_MODE=""

WORKDIR /ng-app
COPY ["./package*.json", "./"]

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm rebuild node-sass  && \
    npm install 

COPY ./src ./src
COPY angular.json .
COPY tsconfig.json .
COPY tslint.json .

RUN npm run ng build -- --output-path=dist ${COMPILE_MODE}

### STAGE 2: Setup ###
FROM $CR_URL/nginx:1.14.1-alpine

## Copy our default nginx config files
COPY ./nginx/ /etc/nginx/
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/ /usr/share/nginx/html
RUN useradd -u 1001 nonrootuser
RUN chown -R 1001:1001 /usr/share/nginx/html

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
