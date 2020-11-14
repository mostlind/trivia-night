λ(appName : Text) →
λ(prNumber : Natural) →
  { baseHost = "pr-" ++ Natural/show prNumber ++ ".trivianight.mattostlind.com"
  , prefixedName =
      ../util/prefixed-name.dhall (appName ++ "-pr-" ++ Natural/show prNumber)
  , useLimits = True
  , appName
  }
