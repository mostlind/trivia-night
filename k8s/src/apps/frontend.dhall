let AppConfig = ../types/AppConfig.dhall

let kubernetes = ../imports/kubernetes.dhall

let Environment = ../types/Environment.dhall

let name = "trivia-night-frontend"

let frontendService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "frontend"
        , image = environment.appName ++ "-frontend"
        , host = environment.baseHost
        , port = 3000
        , requests = { memory = "64Mi", cpu = "10m" }
        , limits = { memory = "512Mi", cpu = "1000m" }
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  frontendService
