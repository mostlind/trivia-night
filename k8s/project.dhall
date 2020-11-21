let k8s =
      https://raw.githubusercontent.com/mostlind/dhall-k8s/main/package.dhall

in  k8s.Project::{ name = "trivia-night" }
