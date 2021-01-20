let k8s = ../imports/dhall-k8s.dhall

let project = ../project.dhall

in  k8s.Environment::{
    , config = k8s.EnvironmentConfig::{
      , baseHost = "trivianight.mattostlind.com"
      , prefix = project.name ++ "-"
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
