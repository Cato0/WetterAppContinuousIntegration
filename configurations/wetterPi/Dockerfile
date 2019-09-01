# Create image based on the official Node image for ARM from dockerhub
FROM arm32v7/node
#FROM node:8.11.3
#FROM node

WORKDIR /tmp

ADD package.json /tmp/package.json

RUN npm install

# Install the package Angular CLI as a tool initialize, develop, scaffold and maintain Angular applications
RUN npm install -g @angular/cli

# Install the package build-angular from the angular-devkit to build the Angular App
RUN npm install -g @angular-devkit/build-angular

RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
# Change directory so that our commands run inside this new directory and copy dependency definitions (package.json)

WORKDIR /usr/src/app

# Get all the code needed to run the app
COPY . .
# Expose the port the app runs in
EXPOSE 4200

# Share the artifacts with the host system to make them further processable Build the app
#RUN ng build --prod

# Serve the app
ENTRYPOINT ng build --prod
# VOLUME /usr/src/app/node_modules