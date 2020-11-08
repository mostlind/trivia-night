λ(appName : Text) →
λ(prNumber : Natural) →
  ./k8s-definition/k8s-definition.dhall
    (./environments/feature.dhall appName prNumber)
