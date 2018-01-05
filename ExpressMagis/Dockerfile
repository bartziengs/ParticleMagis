# base image
FROM node:alpine

# open port 80
EXPOSE 80

# install packages
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

WORKDIR /client
COPY /client/package.json package.json
COPY /client/package-lock.json package-lock.json
RUN npm install

# copy all local files into the image.
COPY /client .

# start app
CMD ["npm", "start"]