FROM node:14-alpine

WORKDIR /main
COPY ./public /main/public
COPY ./src /main/src
COPY ./package.json /main
COPY ./package-lock.json /main
COPY ./server/frontend.js /main/server/frontend.js

RUN npm install
# RUN npm install react-redux
# RUN npm install @reduxjs/toolkit
RUN npm run build

EXPOSE 3000

CMD ["node", "server/frontend.js"]