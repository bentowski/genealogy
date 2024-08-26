FROM node:alpine

RUN npm install -g npm@latest

WORKDIR /home/node/www

COPY --chown=node:node ./react/package*.json ./

RUN npm ci

COPY --chown=node:node ./react ./

#USER node

CMD ["npm", "start"]