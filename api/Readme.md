# My Travel Solution API
- https://mytravelsolution.com.au
- https://2ctheworldtravelandcruise.com.au


# Libraries Used
- Body Parser
- CORS
- DotEnv
- Express
- Helmet
- Knex
- Morgan
- PG - Postgres

# Starting the application

## Starting the application for the first time
`cd` to the `/api` directory and type `npm install`

## Create the mytravelsolution database using PGAdmin or PSQL
For initial startup, we will be using PSQL in your terminal.
1. Install the latest version of [pgAdmin](https://www.pgadmin.org/download)
2. During installation, set the password for `postgres` and match these properties in the `knexfile.js` file. 
3. In your terminal, type `psql -U postgres`. If all is done correctly, you should see the following output:

```shell

PS C:\Windows\system32> psql -U postgres
Password for user postgres:
psql (11.3)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#

```

## Running the application
`cd` to the `/api` directory and type `npm run migrate`h
The front-end runs on `localhost:3000`