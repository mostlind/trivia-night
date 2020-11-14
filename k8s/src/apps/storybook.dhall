let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let kubernetes = ../imports/kubernetes.dhall

let Resources = ../types/Resources.dhall

let storybookService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "storybook"
        , host = "storybook." ++ environment.baseHost
        , image = environment.prefixedName "storybook"
        , port = 6006
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environment.useLimits
            then  Some { memory = "32Mi", cpu = "10m" }
            else  None Resources
        , envVars = [] : List kubernetes.EnvVar.Type
        }

in  storybookService
