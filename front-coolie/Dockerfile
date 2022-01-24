FROM node:17.1

WORKDIR /app

ARG PORT

COPY package*.json ./

RUN npm install --silent

COPY . ./

EXPOSE ${PORT}

CMD ["npm", "start"]
