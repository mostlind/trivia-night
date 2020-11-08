#! /bin/sh

set -e

./k8s/generate-environment-config/local.sh ./k8s
skaffold dev