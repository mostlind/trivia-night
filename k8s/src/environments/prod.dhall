λ(appName : Text) →
  { baseHost = "trivianight.mattostlind.com"
  , prefixedName = ../util/prefixed-name.dhall appName
  , useLimits = True
  , appName
  }
