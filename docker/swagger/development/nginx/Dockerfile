ARG VERSION=1.23-alpine

FROM nginx:${VERSION}

# Install curl (for check image health)
RUN apk add --no-cache curl

# Copy config files
COPY ./conf.d /etc/nginx/conf.d

WORKDIR /app

# Check image health
HEALTHCHECK --interval=5s --timeout=3s --start-period=1s CMD curl --fail http://127.0.0.1/health || exit 1
