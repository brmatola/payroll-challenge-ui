# Payroll Challenge Frontend

This is the frontend to an application that manages employees, their dependents, and shows accompanying benefits.

## Development

Run the development server:

```
npm run dev
```

And open the site at `http://localhost:3000.

## Updating the client specification

Copy the OpenAPI Specification from `/swagger/v1/swagger.json` on the API site into
a `swagger.json` file. Then, run:

```
npx swagger-typescript-api -p ./swagger.json -o ./api --modular
```

## Environment Variables

- BACKEND_URL - the origin for the API (e.g. http://localhost:8080)
