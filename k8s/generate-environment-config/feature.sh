#! /bin/sh

# Input 1 context to run the script in
# Input 2 is the number of the PR

cd "$1"
mkdir -p "generated"

echo "./src/feature.dhall \"trivia-night\" $2" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment