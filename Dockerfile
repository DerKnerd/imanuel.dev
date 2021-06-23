FROM quay.imanuel.dev/dockerhub/library---node:lastest AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build
RUN yarn next export

FROM quay.imanuel.dev/dockerhub/library---nginx:1.21-alpine

COPY --from=build /app/out/ /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
