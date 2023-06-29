FROM quay.imanuel.dev/dockerhub/library---node:latest

WORKDIR /app
COPY . .

RUN npm install --force
RUN npm run build
ENTRYPOINT node build/index.js
