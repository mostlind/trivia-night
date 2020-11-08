#! /bin/sh

curl -Lo dhall-json-1.7.3-x86_64-linux.tar.bz2 https://github.com/dhall-lang/dhall-haskell/releases/download/1.36.0/dhall-json-1.7.3-x86_64-linux.tar.bz2
tar --extract --bzip2 --file dhall-json-*-x86_64-linux.tar.bz2
cp ./bin/dhall-to-{json,yaml} /usr/local/bin