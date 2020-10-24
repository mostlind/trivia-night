GRANT CONNECT ON DATABASE trivia_night to trivia_night_app_user
grant usage on schema public to trivia_night_app_user
DO
$$
BEGIN
   -- RAISE NOTICE '%', (  -- use instead of EXECUTE to see generated commands
   EXECUTE (
   SELECT string_agg(format('GRANT USAGE ON SCHEMA %I TO trivia_night_app_user', nspname), '; ')
   FROM   pg_namespace
   WHERE  nspname <> 'information_schema' -- exclude information schema and ...
   AND    nspname NOT LIKE 'pg\_%'        -- ... system schemas
   );
END
$$;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO trivia_night_app_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO trivia_night_app_user;
grant create on database trivia_night to trivia_night_app_user