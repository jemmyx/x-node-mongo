#!/bin/bash
[ -d ./docker/ssl ] && rm -r ./docker/ssl/*
echo "Copy SSLs into docker ssl folder..."
cp -r /root/.acme.sh/mydomain.com ./docker/ssl

docker stop my-node-app-1 && docker container rm my-node-app-1

docker build . -t my-node-app-1