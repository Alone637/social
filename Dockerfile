FROM node:18.18

WORKDIR /social_net

COPY . /social_net

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]