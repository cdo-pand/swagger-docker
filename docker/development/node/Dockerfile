ARG VERSION=lts-alpine3.15

FROM node:${VERSION}

# Update system
RUN apk update && apk upgrade

# Install curl (for check image health)
RUN apk add --no-cache curl

# install global packages
RUN npm i -g npm@latest swagger-cli

WORKDIR /app
