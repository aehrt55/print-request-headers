FROM node:10.24.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . ./

RUN yarn install --production=false

ENTRYPOINT ["node", "index.js"]
