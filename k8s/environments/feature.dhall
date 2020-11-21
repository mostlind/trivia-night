let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

let project = ../project.dhall

in  λ(prNumber : Natural) →
      k8s.Environment::{
      , config = k8s.EnvironmentConfig::{
        , baseHost =
            "pr-" ++ Natural/show prNumber ++ ".trivianight.mattostlind.com"
        , prefix = project.name ++ "-pr-" ++ Natural/show prNumber ++ "-"
        , useLimits = True
        , projectName = project.name
        }
      , apps =
        [ ../apps/frontend.dhall
        , ../apps/hasura.dhall
        , ../apps/grafana.dhall
        , ../apps/storybook.dhall
        ]
      }
