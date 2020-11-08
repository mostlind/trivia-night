#! /bin/sh

set -e

./k8s/generate-environment-config/prod.sh ./k8s

BASE_HOST=$(cat ./k8s/generated/baseHost) skaffold run --default-repo registry.digitalocean.com/mostlind -p prod