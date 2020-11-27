let Script_Type
    : Type
    = { name : Text, context : Text, command : Text }

let Script = { Type = Script_Type, default.context = "." }

in  { scripts =
      [ Script::{ name = "dev", command = "./scripts/dev.sh" }
      , Script::{
        , name = "codegen"
        , command = "npm run generate"
        , context = "graphql-codegen"
        }
      , Script::{
        , name = "console"
        , command = "npm run console"
        , context = "hasura"
        }
      ]
    }
