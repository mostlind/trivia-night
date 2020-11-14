λ(appName : Text) →
  { baseHost = "trivianight.localhost"
  , prefixedName = ../util/prefixed-name.dhall appName
  , useLimits = False
  , appName
  }
