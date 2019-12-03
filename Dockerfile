FROM node:alpine AS builder
WORKDIR /usr/app
ENV NODE_ENV=production \
    PATH=/usr/app/node_modules/.bin:$PATH
RUN apk add --no-cache python make g++
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
RUN npx next telemetry --disable && yarn build

FROM node:alpine
WORKDIR /usr/app
COPY --from=builder /usr/app .
CMD [ "yarn", "start" ]
