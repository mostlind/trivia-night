let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let kubernetes = ../imports/kubernetes.dhall

let Resources = ../types/Resources.dhall

let grafanaService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "grafana"
        , host = "grafana." ++ environment.baseHost
        , image = "grafana/grafana:7.3.2"
        , port = 3000
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environment.useLimits
            then  Some { memory = "32Mi", cpu = "100m" }
            else  None Resources
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  grafanaService
