FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN npm install --production

CMD [ "node", "index.js" ]