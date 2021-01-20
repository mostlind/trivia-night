let k8s = ../imports/dhall-k8s.dhall

let frontendService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "frontend"
        , image = environmentConfig.projectName ++ "-frontend"
        , host = environmentConfig.baseHost
        , port = +3000
        , requests = { memory = "64Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "512Mi", cpu = "1000m" }
            else  None k8s.Resources
        , envVars =
          [ k8s.configMapEnvVar
              { name = "API_EMAIL_USER"
              , configMap = environmentConfig.projectName ++ "-config"
              , key = "api-email-user"
              }
          , k8s.configMapEnvVar
              { name = "API_EMAIL_PASSWORD"
              , configMap = environmentConfig.projectName ++ "-config"
              , key = "api-email-password"
              }
          , k8s.envVar
              { name = "API_APP_BASE_HOST", value = environmentConfig.baseHost }
          ]
        }

in  frontendService
