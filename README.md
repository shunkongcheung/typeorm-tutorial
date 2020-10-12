# typeorm-tutorial


## Description

* Understanding how to create `Entity` with  TypeORM
* Understanding `connection`
* Understanding how to use `migrations`
* Understanding `queryManager`

## Usage

Pull from `starter` branch if you would like to follow the tutorial.

To compile `typescript` into `javascript`, execute `npm run build`. Compiled code can be found in `./dist`.

To execute compiled code, run `npm run start`. Running `index.js` will start an interactive command line interface (CLI).

Go through [entities](src/entities) to learn about TypeORM Entity.

Implement function with [database](src/database) to learn about TypeORM `queryManager`.

After implementing all the functions within `database`, you should be able to execute the CLI with `npm run start`.

Go through [migrations](src/migrations) to learn how to create migrations with `queryRunner`.

Go through [ormconfig.json](ormconfig.json) to learn about connections.
