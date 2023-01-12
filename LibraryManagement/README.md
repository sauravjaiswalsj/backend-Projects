# Library System Design

## Overview

we are going to create a Library Management System. A Library Management System is basically used to manage the book record of a Library, where a librarian can view all the available books, add new books, delete books, issue books, and return books.

Functionalities: A librarian can do the following things with this Library Management System:

1. Display Available Books
2. Add New Books
3. Delete Books
4. Update Books

## Architecture

![Libray App Architecture] (<https://user-images.githubusercontent.com/25124428/211995874-14296e8b-42a1-4afb-94df-0c56501d7a80.png>)

## Design Docs

![Libray DB design] (<https://www.cs.stanford.edu/people/ashgup/Reports/database.pdf>)

### Tech spec

1. Expressjs
2. Nodejs
3. Sqlite
4. sequlize

### Solution

- [x] Create a Library DB model design.
- [x] Design the routes and flow control of the data.
- [x] Create the express server and create home route.
- [x] Initialize Db and create the model.
- [x] Create the Add book route to add the books.
- [x] Create Update and remove route.
- [x] Created Search Book route either by book name or the author.
- [x] Create a swagger Docs for the backend system.
