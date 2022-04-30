## Installation

```bash
$ yarn install
```

## Config file

You can modify the config files in the config folder for each environment.

```
/config/test.yaml
/config/development.yaml
/config/staging.yaml
/config/production.yaml
```

## API Documents (Swagger)

You can change the document path in the config file.

```
http://localhost:{port}/doc
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
