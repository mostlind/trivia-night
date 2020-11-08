let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let envVars =
      λ(environment : Environment) →
        [ configMapEnvVar
            { name = "DB_CONNECTION_STRING"
            , configMap = environment.appName ++ "-config"
            , key = "connection-string"
            }
        ]

let backendService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "backend"
        , host = "api." ++ environment.baseHost
        , image = environment.appName ++ "-backend"
        , port = 3001
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits = { memory = "32Mi", cpu = "100m" }
        , envVars = envVars environment
        }

in  backendService
