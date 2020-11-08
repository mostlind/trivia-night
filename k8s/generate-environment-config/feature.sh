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


echo "Generating Kubernetes config file for feature environmnet PR-$2..."

cd "$1"
mkdir -p "generated"

echo "./src/feature.dhall \"trivia-night\" $2" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment

echo "(./src/environments/feature.dhall \"trivia-night\" $2).baseHost" | dhall-to-json | jq -r > generated/baseHost

echo "Config file written to $1/generated/out.yaml"