FROM node:17.1

ARG PORT

WORKDIR /usr/src/app

COPY . ./

RUN npm install -s

RUN npm install -s -g @nestjs/cli@8.1.5

CMD [ "npm", "run", "start:dev" ]

EXPOSE ${PORT}