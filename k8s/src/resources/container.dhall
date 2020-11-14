let AppConfig = ../types/AppConfig.dhall

let kubernetes = ../imports/kubernetes.dhall

let Optional/map = ../imports/mapOption.dhall

let Map = ../imports/mapType.dhall

let Resources = ../types/Resources.dhall

let containerPort =
      λ(port : Natural) → kubernetes.ContainerPort::{ containerPort = port }

let resourcesToMap = λ(resources : Resources) → toMap resources

let container =
      λ(config : AppConfig) →
        kubernetes.Container::{
        , name = config.name
        , image = Some config.image
        , resources = Some kubernetes.ResourceRequirements::{
          , requests = Some (toMap config.requests)
          , limits =
              Optional/map
                Resources
                (Map Text Text)
                resourcesToMap
                config.limits
          }
        , ports = Some [ containerPort config.port ]
        , env = Some config.envVars
        }

in  container
