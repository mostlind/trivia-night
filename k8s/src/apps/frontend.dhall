let AppConfig = ../types/AppConfig.dhall

let kubernetes = ../imports/kubernetes.dhall

let Environment = ../types/Environment.dhall

let Resources = ../types/Resources.dhall

let frontendService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "frontend"
        , image = environment.appName ++ "-frontend"
        , host = environment.baseHost
        , port = 3000
        , requests = { memory = "64Mi", cpu = "10m" }
        , limits =
            if    environment.useLimits
            then  Some { memory = "512Mi", cpu = "1000m" }
            else  None Resources
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  frontendService
