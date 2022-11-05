FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

RUN mkdir /app
WORKDIR /app
ADD . .

RUN yarn
RUN yarn build

CMD ["yarn", "run", "start"]