let AppConfig = ../types/AppConfig.dhall

let kubernetes = ../imports/kubernetes.dhall

let containerPort =
      λ(port : Natural) → kubernetes.ContainerPort::{ containerPort = port }

let container =
      λ(config : AppConfig) →
        kubernetes.Container::{
        , name = config.name
        , image = Some config.image
        , resources = Some kubernetes.ResourceRequirements::{
          , requests = Some (toMap config.requests)
          , limits = Some (toMap config.limits)
          }
        , ports = Some [ containerPort config.port ]
        , env = Some config.envVars
        }

in  container
