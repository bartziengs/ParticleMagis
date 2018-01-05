# base image
FROM node:alpine

# open port 80
EXPOSE 80

# install packages
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

#install inside client
WORKDIR /client
RUN npm install

# start app
CMD ["npm", "start"]