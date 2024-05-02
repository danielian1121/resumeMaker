FROM node:alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install && yarn cache clean

COPY . /usr/src/app

EXPOSE 8000

CMD [ "yarn", "start" ]
