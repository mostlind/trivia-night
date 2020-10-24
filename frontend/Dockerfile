
FROM node:12-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

EXPOSE 3000
ARG ENV=development
ENV NODE_ENV $ENV
# CMD npm run $NODE_ENV
CMD npm run dev

COPY --chown=node:node package.json ./package.json
COPY --chown=node:node package-lock.json ./package-lock.json

RUN npm ci 
COPY --chown=node:node . .