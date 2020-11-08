let kubernetes = ../imports/kubernetes.dhall

let AppConfig = ../types/AppConfig.dhall

let servicePort = λ(port : Natural) → kubernetes.ServicePort::{ port }

let service =
      λ(config : AppConfig) →
        kubernetes.Service::{
        , metadata = kubernetes.ObjectMeta::{ name = Some config.name }
        , spec = Some kubernetes.ServiceSpec::{
          , ports = Some [ servicePort config.port ]
          , selector = Some (toMap { app = config.name })
          }
        }

in  service
