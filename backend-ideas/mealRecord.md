Build a meal record-keeping application:

1. User Auth:
    * Users should be able to sign up with a unique email and password.
    * Users should be able to log in with their email and password.
    * Passwords should be hashed and salted before storing them in the database.
    * Users should be able to log out.
    * After successful signup and login user should receive a JSON web token (JWT) for authentication.
    * Every request to private routes should be checked for authentication.
    * Implement forgot password functionality as well.
    * You can also use any other third-party authentication service like auth0 or firebase.

2. Meal Records:
    * Users should be able to add new meal records with time, meal name, calories
    * Users can enter meal, and time without calories. In that case, we will use https://www.nutritionix.com/business/api
    to call this API and fetch calories via meal name(pick the first one). If calories are not found using this API, default calories can be taken as 250.
    * User should view see all meals.
    * Users can update meal records by id

3. Role Permissions:
    * There are 2 kinds of roles: users (given to everyone) and admins.
    * Users can CRUD only their records
    * Admins can CRUD everyone's records
    * Admins can make any user an admin and make any admin a normal user

extra:
implement pagination and other filters to fetch records.

Submission:
Submit a link to a postman collection, having all these APIs connected to a deployed link, Also add a file describing your database schema
The project has to be made individually! 
