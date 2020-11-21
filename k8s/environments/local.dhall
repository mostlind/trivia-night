let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

let project = ../project.dhall

in  k8s.Environment::{
    , config = k8s.EnvironmentConfig::{
      , baseHost = "trivianight.localhost"
      , prefix = project.name ++ "-"
      , useLimits = False
      , projectName = project.name
      }
    , apps =
      [ ../apps/frontend.dhall
      , ../apps/hasura.dhall
      , ../apps/grafana.dhall
      , ../apps/storybook.dhall
      ]
    }
