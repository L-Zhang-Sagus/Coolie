FROM node:17.1

WORKDIR /usr/src/app

ARG PORT

COPY ./* ./

RUN npm install -s

RUN npm install -g -s @angular/cli

EXPOSE $PORT

CMD ["npm", "start"]
