# BookStore

You need to write a backend server which should implement below mentioned endpoints.

``` JSON
Books Schema
{
    name: string,
    author: string,
    genre: string,
    dateOfRelease: string,
    bookImage: string,
    rating: number,
    price: number
}
```

## Create the following API endpoints

```GET /api/v1/books```

Return all products with status code ``200``.

Sample Response Body Format:

``` JSON
[
    {
        "id": "639d2eeb7a3234daa2325fb8",
        "name": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        "dateOfRelease": "1988-12-19T00:00:00.000Z",
        "bookImage": "link",
        "rating": 5,
        "price": 100
    }
]
```

```GET /api/v1/books/:id```

Return a product with matching ID and status `200`

If the book is `not found`, return status `404`.

``` JSON
{
    "id": "639d2eeb7a3234daa2325fb8"
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "dateOfRelease": "1988-12-19T00:00:00.000Z",
    "bookImage": "link",
    "rating": 5,
    "price": 100
}
```

```POST: /api/v1/books/add```

Create a book and return it with status code `201`. Server should generate a unique ID.

If name, author, genre, dateOfRelease, rating, price is missing, return status code 400.

Request Schema:

``` JSON
{
    name: required,
    author: required,
    genre: required,
    dateOfRelease: required,
    bookImage:string,
    rating:required,
    price:required
}
```

Sample Response Body Format:

``` JSON
{
    "id": "639d2eeb7a3234daa2325fb8",
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "dateOfRelease": "1988-12-19T00:00:00.000Z",
    "bookImage": "link",
    "rating": 5,
    "price": 100
}
```

```PUT: /api/v1/books/:id```

Update a book name, author, genre, dateOfRelease, rating, price using ID. Return the updated boook with status code 200.

Return a status code 404 if the book does not exists.

Sample Response Body Format:

``` JSON
{
    "id": "639d2eeb7a3234daa2325fb8"
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Adventure",
    "dateOfRelease": "1988-12-19T00:00:00.000Z",
    "bookImage": "link2",
    "rating": 10,
    "price": 500
}
```

```DELETE: /api/v1/books/:id```

Delete a book using ID and return the status code 200.

If book doesn’t exist, return status code 404.
