FROM node:alpine

LABEL Melby Baldove <melqbaldove@gmail.com>

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
