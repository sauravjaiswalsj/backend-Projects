# Authentication System Design

## Overview

An authentication system build using express js consists of a user login and register system. The user register to the application for the first time. Their information is captured and stored in the db. User information sucn as password is encrypted and then store. When the user login's next time with the credentials that cred is verified and if successful, the user will be redirected to the dashboard of the application.

### Tech spec

We use Expressjs a nodejs framework for the backend development which is connected to a Sql db where the user information is shared.

### Solution

- [x] Create a register API for the user to register to the application.
- [x] User information is validated like email and password.
- [x]  User password is verified and then stored in the sql db.
- [x]  Create a Login API for the user to login to the application.
- [x]  User information for the login is verified to check if the provided password is correct or not.
- [x]  If information provided is correct then user can login to the application.

#### Forgot Password API

1. To have a forgot password API.

#### Add Session Layer

1. Add Token based authentication.
2. Add login use google and facebook.

![Auth App Architecture](https://user-images.githubusercontent.com/25124428/210822811-c396fd4d-c1b9-4d37-bc89-b082a571d782.jpeg)
