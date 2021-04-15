FROM node:14

WORKDIR /app

# package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . ./

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]
