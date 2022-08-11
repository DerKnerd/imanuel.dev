FROM quay.imanuel.dev/dockerhub/library---node:latest AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build
ENTRYPOINT node /app/build/index.js