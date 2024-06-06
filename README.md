# torc-challenge

API for Torcs's test

## Run Dev Server

`npm i`

`npm run dev`

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
