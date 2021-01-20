let k8s = ../imports/dhall-k8s.dhall

let grafanaService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "grafana"
        , host = "grafana." ++ environmentConfig.baseHost
        , image = "grafana/grafana:7.3.2"
        , port = +3000
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "32Mi", cpu = "100m" }
            else  None k8s.Resources
        , envVars = [] : List k8s.EnvVar
        }

in  grafanaService
