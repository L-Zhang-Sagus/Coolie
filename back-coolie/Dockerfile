FROM node:17.1

WORKDIR /usr/src/app

ARG PORT

COPY ./* /

RUN npm install -s

EXPOSE $PORT

CMD [ "npm", "start" ]