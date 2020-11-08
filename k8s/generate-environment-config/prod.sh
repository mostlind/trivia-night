#! /bin/sh

# Input 1 context to run the script in

cd "$1"
mkdir -p "generated"

echo "./src/prod.dhall \"trivia-night\"" |  dhall-to-yaml --output "generated/out.yaml" --documents --generated-comment