You need to write a backend server which should implement below mentioned endpoints.

TODO Schema
{
  id: number,
  title: string,
  description: string,
  dueDate: string,
  completed: boolean,
  priority: number,
}
Create the following API endpoints
GET
/api/todo
Return all todos with status code 200.

Sample Response Body Format:

[
    {
        "id": "123",
        "title": "Play Red Dead Redemption 2",
        "description": "Really interesting game.",
        "completed": false,
        "priority": 3,
        "dueDate": "Sat Dec 10 2022 04:08:42 GMT+0000 (Coordinated Universal Time)"
    }
]
/api/todo/:id
Return a todo with matching ID and status 200

If not found return status 404.

Sample Response Body Format:

{
    "id": "123",
    "title": "Play Red Dead Redemption 2",
    "description": "Really interesting game.",
    "completed": false,
    "priority": 3,
    "dueDate": "Sat Dec 10 2022 04:08:42 GMT+0000 (Coordinated Universal Time)"
}
POST
/api/todo
Server should generate a unique ID and return the todo.

Create a todo and return it with status code 201.

If title is missing then return status code 400.

Request schema:

{
  title: required
  description: optional
  dueDate: optional
  completed: optional
  priority: optional range 1-5
}
Sample Response Body Format:

{
    "id": "123",
    "title": "Play Red Dead Redemption 2",
    "description": "Really interesting game.",
    "completed": false,
    "priority": 3,
    "dueDate": "Sat Dec 10 2022 04:08:42 GMT+0000 (Coordinated Universal Time)"
}
PUT
/api/todo/:id
Update title/description/due date, toggle completed, increase/decrease priority.

Return the updated todo with status code 200.

Return status code 404 if todo dose not exists.

Sample Response Body Format:

{
    "id": "125",
    "title": "Play Valorant",
    "description": "Push rank to Immortal",
    "completed": true,
    "priority": 3,
    "dueDate": "Sat Dec 10 2022 04:08:42 GMT+0000 (Coordinated Universal Time)"
}
DELETE
/api/todo/:id
Delete a todo.

Return status 200 if todo exists else return 404


