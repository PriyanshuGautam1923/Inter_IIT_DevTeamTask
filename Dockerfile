FROM node:14

WORKDIR /app
USER root
COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["node", "index.js"]