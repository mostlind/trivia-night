let envVar = ../resources/envVar.dhall

let configMapEnvVar = ../resources/configMapEnvVar.dhall

let AppConfig = ../types/AppConfig.dhall

let Environment = ../types/Environment.dhall

let Text/concatSep = https://prelude.dhall-lang.org/Text/concatSep

let authHookUrl =
      λ(environment : Environment) →
        let backend = ./backend.dhall environment

        in      "http://"
            ++  backend.name
            ++  ":"
            ++  Natural/show backend.port
            ++  "/auth"

let envVars =
      λ(environment : Environment) →
        [ envVar { name = "HASURA_GRAPHQL_ENABLE_CONSOLE", value = "false" }
        , envVar
            { name = "HASURA_GRAPHQL_ENABLED_LOG_TYPES"
            , value = "startup, http-log, webhook-log, websocket-log, query-log"
            }
        , envVar { name = "HASURA_GRAPHQL_AUTH_HOOK_MODE", value = "POST" }
        , envVar
            { name = "HASURA_GRAPHQL_CORS_DOMAIN"
            , value =
                Text/concatSep
                  ", "
                  [ "http://*." ++ environment.baseHost
                  , "http://" ++ environment.baseHost
                  ]
            }
        , envVar
            { name = "HASURA_GRAPHQL_MIGRATIONS_DIR"
            , value = "/hasura-migrations"
            }
        , configMapEnvVar
            { name = "HASURA_GRAPHQL_ADMIN_SECRET"
            , configMap = environment.appName ++ "-config"
            , key = "hasura-admin-secret"
            }
        , envVar
            { name = "HASURA_GRAPHQL_AUTH_HOOK"
            , value = authHookUrl environment
            }
        , configMapEnvVar
            { name = "HASURA_GRAPHQL_DATABASE_URL"
            , configMap = environment.appName ++ "-config"
            , key = "connection-string"
            }
        ]

let hasuraService
    : Environment → AppConfig
    = λ(environment : Environment) →
        { name = environment.prefixedName "hasura"
        , image = environment.appName ++ "-hasura"
        , host = "hasura." ++ environment.baseHost
        , port = 8080
        , requests = { memory = "32Mi", cpu = "25m" }
        , limits = { memory = "256Mi", cpu = "200m" }
        , envVars = envVars environment
        }

in  hasuraService
