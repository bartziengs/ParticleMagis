# base image
FROM node:latest

# open port 80
EXPOSE 80

# install packages
COPY client/package.json package.json
RUN npm install

COPY /client .

# start app
 CMD ["npm", "start"]

 #note, in order to connect to container run
 # docker exec -it <name> bash