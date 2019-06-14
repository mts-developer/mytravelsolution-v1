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
- pg: Postgres

# Starting the application

## Starting the application for the first time

`cd` to the `/api` directory and type `npm install`

### Create the mytravelsolution database using PGAdmin or PSQL

For all intents and purposes, we will be describing installation via PSQL in your terminal.
1. Install the latest version of [pgAdmin](https://www.pgadmin.org/download)
2. During installation, set the password for `postgres` and match these properties in the `knexfile.js` file. 
3. In a separate terminal, type `psql -U postgres`. If you have done this correctly, you should see the following output:

```console
PS C:\Windows\system32> psql -U postgres
Password for user postgres:
psql (11.3)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#
```

4. Type `CREATE DATABASE mytravelsolution` to create the mytravelsolution database.
5. Verify the database has been created by typing `\l`. You should now also be able to see the database in the pgAdmin interface.

### Running the application
1. Return to your primary terminal and type `npm run migrate` to create all tables.
2. Then type `npm run seed` to seed the tables.
3. Finally, type `npm run start` to start the API.

```console
$ npm run start

> api@1.0.0 start C:\Users\aosorio\Development\projects\mytravelsolution\api
> nodemon server.js

[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
API is running on PORT: 7000
```


The API runs on `localhost:7000`