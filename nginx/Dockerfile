# STEP 2 build a small nginx image with static website
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

VOLUME /home/pi/Docker/angular_nodejs_mongodb_app/dist/wetter /usr/share/nginx/html

## From 'builder' copy website to default nginx public folder
#COPY --from=builder /app/dist /usr/share/nginx/html
#COPY dist/wetter /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
