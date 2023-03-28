FROM node:16 as build

RUN apt-get update && \
    apt-get install -y nginx

RUN rm /etc/nginx/sites-enabled/default

COPY nginx/nginx.conf /etc/nginx/conf.d

COPY docker/ssl/* /etc/ssl/certs/

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

COPY . .

COPY .env dist

#CMD ["node", "dist/bundle.js"]

RUN npm install pm2 -g


EXPOSE 80
EXPOSE 3000
EXPOSE 443

#CMD ["pm2-runtime", "start", "dist/bundle.js"]

CMD pm2-runtime start dist/bundle.js

# Commande de démarrage pour le conteneur
CMD ["nginx", "-g", "daemon off;"]

