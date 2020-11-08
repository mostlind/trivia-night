let kubernetes = ../imports/kubernetes.dhall

let map = ../imports/map.dhall

let AppConfig = ../types/AppConfig.dhall

let rule =
      λ(appConfig : AppConfig) →
        kubernetes.IngressRule::{
        , host = Some appConfig.host
        , http = Some kubernetes.HTTPIngressRuleValue::{
          , paths =
                [ kubernetes.HTTPIngressPath::{
                  , path = Some "/"
                  , backend = kubernetes.IngressBackend::{
                    , serviceName = Some appConfig.name
                    , servicePort = Some
                        (kubernetes.IntOrString.Int appConfig.port)
                    }
                  }
                ]
              : List kubernetes.HTTPIngressPath.Type
          }
        }

in  λ(name : Text) →
    λ(appConfigs : List AppConfig) →
      kubernetes.Ingress::{
      , metadata = kubernetes.ObjectMeta::{ name = Some name }
      , spec = Some kubernetes.IngressSpec::{
        , rules = Some
            (map AppConfig kubernetes.IngressRule.Type rule appConfigs)
        }
      }
