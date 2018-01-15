# base image
FROM node:latest

ENV NPM_CONFIG_LOGLEVEL warn

# open ports (multiple because experimental)
EXPOSE 80 3000 3001 5000 5001

# set a working directory
WORKDIR app

# install packages
COPY package*.json ./
RUN npm install && npm install -g serve

COPY . .

RUN npm run build

# start app
CMD ["serve", "--cors"]