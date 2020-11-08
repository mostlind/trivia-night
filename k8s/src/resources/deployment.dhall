let AppConfig = ../types/AppConfig.dhall

let kubernetes = ../imports/kubernetes.dhall

let container = ./container.dhall

let deployment =
      λ(config : AppConfig) →
        kubernetes.Deployment::{
        , metadata = kubernetes.ObjectMeta::{ name = Some config.name }
        , spec = Some kubernetes.DeploymentSpec::{
          , selector = kubernetes.LabelSelector::{
            , matchLabels = Some (toMap { app = config.name })
            }
          , template = kubernetes.PodTemplateSpec::{
            , metadata = kubernetes.ObjectMeta::{
              , labels = Some (toMap { app = config.name })
              }
            , spec = Some kubernetes.PodSpec::{
              , containers = [ container config ]
              }
            }
          }
        }

in  deployment
