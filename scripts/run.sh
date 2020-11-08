#! /bin/sh

set -e

./k8s/generate-environment-config/prod.sh ./k8s/generated/out.yaml
skaffold run --default-repo registry.digitalocean.com/mostlind