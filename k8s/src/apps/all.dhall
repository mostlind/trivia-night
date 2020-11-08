let AppConfig = ../types/AppConfig.dhall

let apply
    : ∀(a : Type) → ∀(b : Type) → a → (a → b) → b
    = λ(a : Type) → λ(b : Type) → λ(arg : a) → λ(fn : a → b) → fn arg

let map = ../imports/map.dhall

let Environment = ../types/Environment.dhall

in  λ(environment : Environment) →
      map
        (Environment → AppConfig)
        AppConfig
        (apply Environment AppConfig environment)
        [ ./backend.dhall, ./frontend.dhall, ./hasura.dhall, ./grafana.dhall ]
