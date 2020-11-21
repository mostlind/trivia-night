let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

let frontendService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "frontend"
        , image = environmentConfig.projectName ++ "-frontend"
        , host = environmentConfig.baseHost
        , port = 3000
        , requests = { memory = "64Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "512Mi", cpu = "1000m" }
            else  None k8s.Resources
        , envVars = [] : List k8s.EnvVar
        }

in  frontendService
