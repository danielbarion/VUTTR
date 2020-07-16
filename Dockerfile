FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000
