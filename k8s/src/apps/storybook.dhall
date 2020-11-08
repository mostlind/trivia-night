let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let kubernetes = ../imports/kubernetes.dhall

let storybookService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "storybook"
        , host = "storybook." ++ environment.baseHost
        , image = environment.prefixedName "storybook"
        , port = 6006
        , requests = { memory = "64Mi", cpu = "25m" }
        , limits = { memory = "256Mi", cpu = "100m" }
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  storybookService
