let k8s = ../imports/dhall-k8s.dhall

let Text/concatSep =
      https://prelude.dhall-lang.org/Text/concatSep sha256:e4401d69918c61b92a4c0288f7d60a6560ca99726138ed8ebc58dca2cd205e58

let authHookUrl =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        let frontend = ./frontend.dhall environmentConfig

        in      "http://"
            ++  frontend.name
            ++  ":"
            ++  Integer/show frontend.port
            ++  "/api/auth"

let envVars =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        [ k8s.envVar { name = "HASURA_GRAPHQL_ENABLE_CONSOLE", value = "false" }
        , k8s.envVar
            { name = "HASURA_GRAPHQL_ENABLED_LOG_TYPES"
            , value = "startup, http-log, webhook-log, websocket-log, query-log"
            }
        , k8s.envVar { name = "HASURA_GRAPHQL_AUTH_HOOK_MODE", value = "POST" }
        , k8s.envVar
            { name = "HASURA_GRAPHQL_CORS_DOMAIN"
            , value =
                Text/concatSep
                  ", "
                  [ "http://*." ++ environmentConfig.baseHost
                  , "http://" ++ environmentConfig.baseHost
                  , "http://localhost:9695"
                  ]
            }
        , k8s.envVar
            { name = "HASURA_GRAPHQL_MIGRATIONS_DIR"
            , value = "/hasura-migrations"
            }
        , k8s.configMapEnvVar
            { name = "HASURA_GRAPHQL_ADMIN_SECRET"
            , configMap = environmentConfig.projectName ++ "-config"
            , key = "hasura-admin-secret"
            }
        , k8s.envVar
            { name = "HASURA_GRAPHQL_AUTH_HOOK"
            , value = authHookUrl environmentConfig
            }
        , k8s.configMapEnvVar
            { name = "HASURA_GRAPHQL_DATABASE_URL"
            , configMap = environmentConfig.projectName ++ "-config"
            , key = "connection-string"
            }
        ]

let hasuraService =
      λ(environmentConfig : k8s.EnvironmentConfig.Type) →
        k8s.App::{
        , name = environmentConfig.prefix ++ "hasura"
        , image = environmentConfig.projectName ++ "-hasura"
        , host = "hasura." ++ environmentConfig.baseHost
        , port = +8080
        , requests = { memory = "32Mi", cpu = "10m" }
        , limits =
            if    environmentConfig.useLimits
            then  Some { memory = "256Mi", cpu = "200m" }
            else  None k8s.Resources
        , envVars = envVars environmentConfig
        }

in  hasuraService
