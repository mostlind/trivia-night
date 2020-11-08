FROM node:12-alpine as builder

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

EXPOSE 3000
ARG ENV=development
ENV NODE_ENV $ENV

COPY --chown=node:node package.json ./package.json
COPY --chown=node:node package-lock.json ./package-lock.json

RUN npm ci --ignore-scripts

COPY --chown=node:node . .

ARG NEXT_PUBLIC_TODO_APP_BACKEND_URL
ENV NEXT_PUBLIC_TODO_APP_BACKEND_URL $NEXT_PUBLIC_TODO_APP_BACKEND_URL

ARG NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL
ENV NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL $NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL

RUN npm run build

CMD npm run start
