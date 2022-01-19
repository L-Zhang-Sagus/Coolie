FROM node:17.1

ARG PORT

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

RUN npm i -g @nestjs/cli

COPY . ./

CMD [ "npm", "run", "start:dev" ]

EXPOSE ${PORT}