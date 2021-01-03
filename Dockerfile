FROM node:alpine AS builder
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python && \
    npm install --quiet node-gyp -g
RUN npm install && \
    npm install preact typescript vue
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
