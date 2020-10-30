- Using dnsmasq for \*.localhost domains causes the hasura cli to throw errors
  to get around this I built the hasura cli from source according to
  https://github.com/hasura/graphql-engine/issues/5138

- moved `Dockerfile` into `docker/` so that skaffold didn't rebuild/restart container whenever a change was made in th console UI
