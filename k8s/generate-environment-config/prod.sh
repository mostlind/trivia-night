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

echo "./src/prod.dhall \"trivia-night\"" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment

echo "(./src/environments/prod.dhall \"trivia-night\" $2).baseHost" | dhall-to-json | jq -r > generated/baseHost

echo "Config file written to $1/generated/out.yaml"