#! /bin/sh

set -e

./k8s/generate-environment-config/feature.sh ./k8s $1

BASE_HOST=$(cat ./k8s/generated/baseHost) skaffold run --default-repo registry.digitalocean.com/mostlind -p prod