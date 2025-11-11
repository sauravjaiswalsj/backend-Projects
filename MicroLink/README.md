# URL Shortner System Design

## Overview

A URL shortener service creates an alias or a short URL for a long URL. Users are redirected to the original URL when they visit these short links.

Why do we need a URL shortener?
URL shortener saves space in general when we are sharing URLs. Users are also less likely to mistype shorter URLs. Moreover, we can also optimize links across devices, this allows us to track individual links.

Steps:

1. Create a server using express:
    * require express.
    * Listen to the port
2. Middleware: these are funtions which get called before any api is called.
express.json() // application json
express.static('public') // shows the html from the public folder
express.urlencoded({extended:false}) // to understand the post req we use this.

3. need to add the routes.
    1. On / or home page: we need to show the Html page
        * we first write a middleware to using app.use('/',fun()) => whatever url starts with / should be called and the funtion should return the html file.
    2. On /urlapi route:
        * should return the shortend url.