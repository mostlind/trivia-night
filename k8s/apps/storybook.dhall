let k8s = ../imports/dhall-k8s.dhall

let storybookService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "storybook"
        , image = environmentConfig.projectName ++ "-storybook"
        , host = "storybook." ++ environmentConfig.baseHost
        , port = +6006
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "32Mi", cpu = "10m" }
            else  None k8s.Resources
        , envVars = [] : List k8s.EnvVar
        }

in  storybookService
