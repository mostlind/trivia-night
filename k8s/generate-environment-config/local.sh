#! /bin/sh

set -e

if [ -z "$1" ]
  then
    echo "Must supply directory context as first argument"
fi

echo "Generating local Kubernetes config file..."

# Input 1 context to run the script in
cd "$1"
mkdir -p "generated"
echo '(./imports/dhall-k8s.dhall).kubernetesConfig ./environments/local.dhall' |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment

echo "Config file written to $1/generated/out.yaml"