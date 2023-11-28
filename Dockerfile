FROM node:20-alpine

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY  . .

RUN pnpm run build

EXPOSE 5280

CMD ["pnpm", "start"]
