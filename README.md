# datstack

Hyper portable and lean Javascript web application boilerplate.

> dat stack tho

## Requirements

* NodeJS

## Features

* Automated unit testing
* Code-based database migrations for MySQL, PostgreSQL, and sqlite3
* Frontend app built with Browserify, Grunt, and Bower
* Share code between the server and client
* Works out of the box for PaaS providers

## Awesome

Install dependencies (and implicitly run `build` and `migrate`):

```
$ npm install
```

Build the client application (check out `Gruntfile.js` for options):

```
$ npm run build
```

Run database migrations (if there are any, run via
[db-migrate](https://github.com/kunklejr/node-db-migrate)):

```
$ npm run migrate
```

Run tests (if there are any, run via [tape](https://github.com/substack/tape)):

```
$ npm test
```

Start the server app:

```
$ npm start
```

## Project Structure

* `app/client/main.js` Client application
* `app/server/main.js` Server application
* `database.json` Database credentials
* `dist/client/` Compiled output directory for client app
* `public/` Web root
* `style/style.less` Style sheet base
* `test/*.js` Unit tests

## Database

Migrations are handled via
[db-migrate](https://github.com/kunklejr/node-db-migrate), which has support
for PostgreSQL, MySQL, and sqlite3. The `migrate` script is only run if there
is a `database.json` present in the root of the repo.

**Protip**: Create a `./database.json` file to ensure the database
credentials are correct (see the db-migrate docs for format details).

It's probably a good idea to source this file in the server code so database
credentials comes from one place.

## PaaS

### OpenShift

OpenShift is supported, simply push the repo into the OpenShift remote. Check
out `.openshift/action_hooks` to see what's happening.

### Heroku


