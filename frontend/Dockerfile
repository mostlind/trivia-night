
FROM node:12-alpine as builder

RUN apk add jq

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

EXPOSE 3000
ARG ENV=development
ENV NODE_ENV $ENV

COPY --chown=node:node package.json ./package.json
COPY --chown=node:node package-lock.json ./package-lock.json

RUN npm ci

COPY --chown=node:node . .

ARG NEXT_PUBLIC_TODO_APP_BACKEND_URL
ENV NEXT_PUBLIC_TODO_APP_BACKEND_URL $NEXT_PUBLIC_TODO_APP_BACKEND_URL

RUN npm run build

# write next version to file to use in next step
# RUN cat package-lock.json | jq -r ".dependencies.next.version" > next_version

FROM node:12-alpine

COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/node_modules ./node_modules

CMD npx next start

