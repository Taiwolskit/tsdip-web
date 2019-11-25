FROM node:alpine AS builder
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM node:alpine
WORKDIR /usr/app
COPY --from=builder /usr/app .
CMD [ "yarn", "start" ]
