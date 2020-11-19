let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

let project = ../project.dhall

in  k8s.Environment::{
    , config = k8s.EnvironmentConfig::{
      , baseHost = "trivianight.mattostlind.com"
      , prefix = project.name ++ "-"
      , useLimits = True
      , projectName = project.name
      }
    , apps =
      [ ../apps/backend.dhall
      , ../apps/frontend.dhall
      , ../apps/hasura.dhall
      , ../apps/grafana.dhall
      , ../apps/storybook.dhall
      ]
    }
