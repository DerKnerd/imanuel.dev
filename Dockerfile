FROM node AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build
RUN yarn next export

FROM nginx:1.17.1-alpine

COPY --from=build /app/out/ /usr/share/nginx/html
