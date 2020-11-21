#! /bin/sh

set -e

# Input 1 context to run the script in
# Input 2 is the number of the PR

if [ -z "$1" ]
  then
    echo "Must supply directory context as first argument"
fi


if [ $2 -lt 1 ]
  then
    echo "Second argumant must be PR number and greater than 0"
    exit 1
fi


echo "Generating Kubernetes config file for feature environment PR-$2..."

cd "$1"
mkdir -p "generated"

echo "(https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall).kubernetesConfig (./environments/feature.dhall $2)" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment

echo "(./environments/feature.dhall $2).config.baseHost" | dhall-to-json | xargs > generated/baseHost

echo "Config file written to $1/generated/out.yaml"