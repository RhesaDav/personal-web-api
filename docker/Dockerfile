FROM node:16-bullseye-slim as base

ARG PORT
ARG DATABASE_URL

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl
ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app
ADD . .

RUN yarn
RUN yarn build


CMD ["yarn", "run", "start"]