let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let kubernetes = ../imports/kubernetes.dhall

let grafanaService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "grafana"
        , host = "grafana." ++ environment.baseHost
        , image = "grafana/grafana"
        , port = 3000
        , requests = { memory = "32Mi", cpu = "25m" }
        , limits = { memory = "32Mi", cpu = "100m" }
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  grafanaService
