# FROM node:7
FROM arm32v7/node

ADD package.json /tmp
ADD node_modules /tmp/node_modules

RUN cd /tmp &&  npm install

RUN mkdir -p /app && cp -a /tmp/node_modules /app

WORKDIR /app

COPY . /app

CMD node server.js

EXPOSE 4000