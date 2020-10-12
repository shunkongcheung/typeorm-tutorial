# typeorm-tutorial


## Description

* Understanding how to create `Entity` with  TypeORM
* Understanding `connection`
* Understanding how to use `migrations`
* Understanding `queryManager`

## Usage

To compile `typescript` into `javascript`, execute `npm run build`. Compiled code can be found in `./dist`.

To execute compiled code, run `npm run start`. Running `index.js` will start an interactive command line interface (CLI).

## Lesson 1: QueryManager

Pull from `starter` branch if you would like to follow the tutorial.

Go through [entities](src/entities) to learn about TypeORM Entity.

Implement function with [database](src/database) to learn about TypeORM `queryManager`.

After implementing all the functions within `database`, you should be able to execute the CLI with `npm run start`.


## Lesson 2: QueryRunner

Go through [package.json](package.json) to learn about TypeORM's migration commands'.

Go through [migrations](src/migrations) to learn how to create migrations with `queryRunner`.


## Lesson 3: Connection

Go through [ormconfig.json](ormconfig.json) to learn about connections with `ormconfig.json`.

Go through [getDbConnection](src/getDbConnection.ts) to learn about connections with inline configuration.

Go through [.env.example](.env.example) to learn about connections with `.env`.
