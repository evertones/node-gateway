# API Gateway

## Summary

Simple gateway written in Nodejs.

### Requests

It supports all types of HTTP requests:
- GET
- POST
- PUT
- DELETE
- etc

It forwards all HTTP header parameters.
It forwards the form body in POST requests.

### Responses

It supports responses of all Content Types:
- `application/json`
- `application/pdf`
- etc

## To start in DEV mode

This is the DEV mode.
It watches code changes and apply them automatically.
```
node run dev
```

## To start
This is NOT DEV mode.
It starts the server, but does NOT watch code changes.
```
node run start
```
