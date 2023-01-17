# Notice Board

We need to create an API for our school notice board

For now anyone should be able to put a notice on the board

Notice schema

``` JSON
{
  author: string,
  message: string,
  date: string,
  likes: number (default: 0)
}
```

``GET /api/notice``

**Return a list of notices with status code 200 sorted by date.**

Sample Response Body Format:

``` JSON
{
    "data": [
        {
            "id": 1,
            "author": "John Doe",
            "message": "Lorem Ipsum",
            "date": "10 September, 2022",
            "likes": 4
        }
    ]
}

/api/notice/:id
```

**Return a notice with matching ID with status code 200.**

If the ID is invalid, return 404 status code.

Sample Response Body Format:

``` JSON
{
    "id": 1,
    "author": "John Doe",
    "message": "Lorem Ipsum",
    "date": "10 September, 2022",
    "likes": 4
}
```

``POST /api/notice``

**Create a Notice and return it with status code 201. Server should generate a unique ID for the Notice.**

The likes must be set to 0 as default.

If the author or message is not provided, do not create a notice and return status code 400.

Sample Request schema:

``` JSON
{
    author: required,
    message: required,
}
```

Sample Response Body Format:

``` JSON
{
    "id": 1,
    "author": "John Doe",
    "message": "Lorem Ipsum",
    "date": "10 September, 2022",
    "likes": 0
}
```

``PUT /api/notice/:id/like``

Increase the like count by 1 and return the updated notice with status code 200.

Return status code 404 if Notice is not found with the given ID.

Sample Response Body Format:

``` JSON
{
    "id": 1,
    "author": "John Doe",
    "message": "Lorem Ipsum",
    "date": "10 September, 2022",
    "likes": 1
}
```
