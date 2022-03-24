FROM node:14-alpine

WORKDIR /main
COPY ./server/todo.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 4001

CMD ["node", "todo.js"]