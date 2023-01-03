# Authentication System Design

## Overview

An authentication system build using express js consists of a user login and register system. The user register to the application for the first time. Their information is captured and stored in the db. User information sucn as password is encrypted and then store. When the user login's next time with the credentials that cred is verified and if successful, the user will be redirected to the dashboard of the application.

### Tech spec

We use Expressjs a nodejs framework for the backend development which is connected to a Sql db where the user information is shared.

### Existing Solution

1. Create a register API for the user to register to the application.
2. User information is validated like email and password.
3. User password is verified and then stored in the sql db.
4. Create a Login API for the user to login to the application.
5. User information for the login is verified to check if the provided password is correct or not.
6. If information provided is correct then user can login to the application.

### TODO

#### Forgot Password API

1. To have a forgot password API.
2. Check if the user exist agains the email provided.

#### Add Session Layer

1. Add Token based authentication.
2. Add login use google and facebook.
