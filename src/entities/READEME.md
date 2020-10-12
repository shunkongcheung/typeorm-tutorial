# Typeorm Tutorial

Here are three Entites: User, Product, Categories. Below is a ER-Diagram of their relationships.

## BaseEntity

`User` inherits `BaseEntity` from `TypeORM`, which inject `queryManager` into this Entity.

Therefore, `User` contains query functions such as `save`, `find`, `findOne` etc.

These functions are handy for simple CRUD actions, but are insufficient to perform complex query.

## ER-Diagram
