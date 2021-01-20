#! /bin/sh

set -e

# Input 1 context to run the script in

if [ -z "$1" ]
  then
    echo "Must supply directory context as first argument"
fi

echo "Generating production Kubernetes config file..."

cd "$1"
mkdir -p "generated"

echo "(./imports/dhall-k8s.dhall).kubernetesConfig ./environments/prod.dhall" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment

echo "(./environments/prod.dhall).config.baseHost" | dhall-to-json | xargs > generated/baseHost

echo "Config file written to $1/generated/out.yaml"