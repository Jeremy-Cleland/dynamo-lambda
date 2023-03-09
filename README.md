# LAB Dynamo-Lambda

## Project: Image Lambda

## DynamoDB

Database: DynamoDB - 1 Table required.

## IAM

1. Add DynamoDBFullAccess to each handler role after the handlers have been created, found in roles in access management

## Lambda

- Write lambda functions that will separately perform the proper CRUD operation on the database.

## API Gateway

### POST

- /people - Given a JSON body, inserts a record into the database.
  - returns an object representing one record, by its id (##).

### GET

- /people  - returns an array of objects representing the records in the database.

- /poeple/##  - returns an object representing one record, by its id (##).

### PUT

- /people/## - Given a JSON body and an ID (##), updates a record in the database.
  - returns an object representing one record, by its id (##).

### DELETE

- /people/## - Given an id (##) removes the matching record from the database.
returns an empty object.


## UML

[UML]()