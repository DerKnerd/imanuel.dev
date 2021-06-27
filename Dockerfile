FROM quay.imanuel.dev/dockerhub/library---node:latest AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

FROM quay.imanuel.dev/dockerhub/library---nginx:1.21-alpine

COPY --from=build /app/build/ /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
