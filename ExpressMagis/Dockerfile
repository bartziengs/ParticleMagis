# base image
FROM node:alpine

#install packages
COPY package.json package.json
copy package-lock.json package-lock.json
RUN npm install

#copy all local files into the image.
COPY . .

# start app
CMD ["npm", "start"]