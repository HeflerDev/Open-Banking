FROM node:17-alpine

WORKDIR /client

COPY package.json .

ENV PATH /client/node_modules/.bin:$PATH

RUN npm install --silent

COPY . .

CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true