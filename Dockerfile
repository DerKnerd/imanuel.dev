FROM node AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build
RUN yarn next export

FROM nginx:1.17.1-alpine

COPY --from=build /app/out/ /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
