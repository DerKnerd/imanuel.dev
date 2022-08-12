FROM quay.imanuel.dev/dockerhub/library---node:latest

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
ENTRYPOINT node build/index.js
