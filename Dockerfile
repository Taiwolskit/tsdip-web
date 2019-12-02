FROM node:alpine AS builder
WORKDIR /usr/app
RUN apk add --no-cache python make g++
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /usr/app
COPY --from=builder /usr/app .
CMD [ "yarn", "start" ]
