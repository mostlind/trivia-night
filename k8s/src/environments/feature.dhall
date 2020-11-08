λ(appName : Text) →
λ(prNumber : Natural) →
  { baseHost = "pr-" ++ Natural/show prNumber ++ ".trivianight.localhost"
  , prefixedName =
      ../util/prefixed-name.dhall (appName ++ "-pr-" ++ Natural/show prNumber)
  , appName
  }
