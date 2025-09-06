# Timestamp Microservice API

This is my own implementation of a Timestamp Microservice API using Express.js. It responds with Unix time and UTC string in JSON format. You can query `/api/:date` with a Unix timestamp or a date string (e.g., 2004-12-03). If no date is provided (`/api`), it returns the current time. Invalid dates return an error. Built on top of the FreeCodeCamp boilerplate
