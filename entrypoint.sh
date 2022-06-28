#!/bin/bash
set -xe
: "${BACKEND_URL}"

sed -i "s|BACKEND_URL|$BACKEND_URL|g" /usr/share/nginx/html/main*.js

exec "$@"