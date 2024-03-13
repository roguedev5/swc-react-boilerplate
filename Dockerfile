FROM node:20.11.0-bullseye
RUN apt-get update && apt-get install -y vim nano
WORKDIR /home/node/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
