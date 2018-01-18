# om uit te voeren gebruik de volgende docker commando's in deze volgorde in de folder van de dockerfile in powershell of cmd:
# 1. docker build -t magisco-front:latest
# 2. docker run -p 5000:5000 magisco-front:latest

# base image
FROM node:alpine

# open ports (multiple because experimental)
EXPOSE 5000

# set a working directory
WORKDIR app

# install packages
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# start app
CMD ["node", "server.js"]