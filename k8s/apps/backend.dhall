let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

let envVars =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        [ k8s.configMapEnvVar
            { name = "DB_CONNECTION_STRING"
            , configMap = environmentConfig.projectName ++ "-config"
            , key = "connection-string"
            }
        ]

let backendService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "backend"
        , host = "api." ++ environmentConfig.baseHost
        , image = environmentConfig.projectName ++ "-backend"
        , port = 3001
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "32Mi", cpu = "100m" }
            else  None k8s.Resources
        , envVars = envVars environmentConfig
        }

in  backendService
