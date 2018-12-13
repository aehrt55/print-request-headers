FROM node:8.14.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . ./

RUN yarn install --production=false

ENTRYPOINT ["node", "index.js"]
