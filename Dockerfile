FROM node:alpine

LABEL Melby Baldove <melqbaldove@gmail.com>

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
