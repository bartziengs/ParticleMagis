# base image
FROM node:alpine

# open ports (multiple because experimental)
EXPOSE 3000

# set a working directory
WORKDIR app

# install packages
COPY package*.json ./
RUN npm install

COPY . .

# start app
CMD ["npm", "start"]