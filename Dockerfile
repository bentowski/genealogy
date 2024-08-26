FROM node:alpine

RUN npm install -g npm@latest

WORKDIR /home/node/www

COPY --chown=node:node ./package*.json ./

RUN npm ci

COPY --chown=node:node ./ ./

# USER node

CMD ["npm", "run", "dev", "-- --host"]