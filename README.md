# Torc Challenge

API for Torc's test.

- [Introduction](#introduction)
- [Installation](#installation)
- [Running the Dev Server](#running-the-dev-server)
- [Running Integration Tests](#running-integration-tests)
- [API Routes](#api-routes)
  - [Get All Listings](#get-all-listings)
  - [Add a Listing](#add-a-listing)
  - [Delete a Listing](#delete-a-listing)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Introduction

This project is an API developed as a test for Torc. It allows you to manage listings by providing endpoints to create, retrieve, and delete listings.

## Installation

1.Clone the repository:

```bash
git clone https://github.com/yourusername/torc-challenge.git
cd torc-challenge
```

2.Install the dependencies:

```bash
npm install
```

## Running the Dev Server

To start the development server, run:

```bash
npm run dev
```

This will start the server on the configured port (default: 3000). You can access the API at http://localhost:3000.

## Running Integration Tests

To run the integration tests, execute:

```bash
npm run test
```

This will run all the tests defined in the project using Jest and Supertest.

## API Routes

### Get All Listings

Retrieve all listings.

```bash
GET /listings
```

Response:

- 200 OK: Returns an array of listings.

### Add a Listing

Create a new listing.

```bash
POST /listings
```

Request Body:

```json
{
  "title": "string",
  "price": "number",
  "description": "string (optional)"
}
```

Response:

- 204 No Content: Listing created successfully.
- 400 Bad Request: Validation error.

### Delete a Listing

Delete a specific listing based on its ID.

```bash
DELETE /api/listings/:id
```

Path Parameter:

- id: The ID of the listing to delete.

Response:

- 204 OK: No Content: Listing deleted successfully.
- 404 Not Found: Listing not found.

## Project Structure

```lua
project-root
├── src
│   ├── controller
|   |   ├── validators
|   |   |   └── listing.validator.ts
│   │   └── listing.controller.ts
│   ├── repository
│   │   └── listing.repository.ts
│   ├── model
│   │   └── listing.ts
|   ├── app.ts
│   └── server.ts
├── __tests__
│   └── listings.spec.ts
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript.
- **Jest**: Testing framework for JavaScript.
- **Supertest**: Library for testing HTTP endpoints.
- **Zod**: TypeScript-first schema declaration and validation library.
