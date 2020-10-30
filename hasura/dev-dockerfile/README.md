The Dev Dockerfile lives in a different folder so that changes to the migrations made in the console don't trigger a skaffold rebuild

This means that migrations have to be run manually (`npm run migrate`) when setting up the project on a new database.
