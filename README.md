# torc-challenge

API for Torcs's test

## Run Dev Server

`npm i`

`npm run dev`

## Run Integration Tests

`npm run test`

## API Routes

GET `/listings` -> Return all listings.

POST `/listings` -> Add listing.

body interface:

```json
{
  title: string;
  price: number;
  description?: string;
}
```

DELETE `/listings:id` -> Delete specific listing based on id.
