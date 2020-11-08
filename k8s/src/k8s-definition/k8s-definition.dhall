let service = ../resources/service.dhall

let deployment = ../resources/deployment.dhall

let kubernetes = ../imports/kubernetes.dhall

let AppConfig = ../types/AppConfig.dhall

let concatMap = ../imports/concatMap.dhall

let map = ../imports/map.dhall

let Environment = ../types/Environment.dhall

let items =
      λ(environment : Environment) →
        let appConfigs = ../apps/all.dhall environment

        let services = map AppConfig kubernetes.Service.Type service appConfigs

        let deployments =
              map AppConfig kubernetes.Deployment.Type deployment appConfigs

        let ingress =
              ../resources/ingress.dhall
                (environment.prefixedName "ingress")
                appConfigs

        let servicesUnion =
              map
                kubernetes.Service.Type
                kubernetes.Resource
                kubernetes.Resource.Service
                services

        let deploymentsUnion =
              map
                kubernetes.Deployment.Type
                kubernetes.Resource
                kubernetes.Resource.Deployment
                deployments

        let ingressUnion = [ kubernetes.Resource.Ingress ingress ]

        in  servicesUnion # deploymentsUnion # ingressUnion

in  items
