#!/bin/bash
echo Starting build in Docker Container and make the artifacts and the node_modules available by volumes
ssh pi@rpi-docker docker run -v /home/pi/Docker/frontendangularbuild/dist:/usr/src/app/dist -v /home/pi/Docker/frontendangularbuild/node_modules:/tmp/node_modules frontendangularbuild && echo Ran Docker Image frontendangularbuild successfully.

echo Copying artifacts...
ssh pi@rpi-docker rsync -a --delete /home/pi/Docker/frontendangularbuild/dist/ /home/pi/Docker/nginx_nodejs_mongodb_app/nginx/dist/ && echo Copied artifacts \(dist\) successfully.
#time ssh pi@rpi-docker cp /home/pi/Docker/frontendangularbuild/dist/ /home/pi/Docker/nginx_nodejs_mongodb_app/dist -r && echo Copied artifacts \(dist\) successfully.

echo Deploying Backend NodeJsServer...
rsync --numeric-ids -az NodeJsServer/ pi@rpi-docker:/home/pi/Docker/nginx_nodejs_mongodb_app/NodeJsServer/ && echo Copied Backend NodeJsServer successfully.
#scp -r -q NodeJsServer/ pi@rpi-docker:/home/pi/Docker/nginx_nodejs_mongodb_app/ && echo Copied Backend NodeJsServer successfully.

echo Copying node_modules from Docker to Jenkins...
rsync --delete -azb pi@rpi-docker:/home/pi/Docker/frontendangularbuild/node_modules/ /var/lib/jenkins/workspace/SWT2/wetter/node_modules/ && echo Copying node_modules successfull.

echo Rebuilding and restarting docker-compose container...
ssh pi@rpi-docker 'cd /home/pi/Docker/nginx_nodejs_mongodb_app && docker-compose down && docker-compose up -d --build && echo Docker-compose rebuild and restart done.'
