# datstack

dat stack tho

## Awesome

Install dependencies:

```
$ npm install
```

Build the client application (check out `Gruntfile.js` for options):

```
$ npm run build
```

Run tests (if there are any, run via [tape](https://github.com/substack/tape)):

```
$ npm test
```

Run database migrations (if there are any, run via
[db-migrate](https://github.com/kunklejr/node-db-migrate)):

```
$ npm run migrate
```

Start the server app:

```
$ npm start
```

## Database

Migrations are handled via
[db-migrate](https://github.com/kunklejr/node-db-migrate), which has support
for PostgreSQL, MySQL, and sqlite3.

**Protip**: Update the `./database.json` file to ensure the database
credentials are correct (see the db-migrate docs for format details).

It's probably a good idea to source this file in the server code so database
credentials comes from one place.

## PaaS

### OpenShift

### Heroku


