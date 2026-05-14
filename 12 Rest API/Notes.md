## REST API or Restfull API
- type of apis that follow some fix rules.

SERVER <---------Req, Res-----------> CLIENT (Browser, Mobile, Alexa)
RESPONSE => Text
            Image
            html document (SSR: Server Side Rendering)
            JSON

DB -> Server => XML
                JSON (most recommended, modern, key-value pair)

### BEST PRACTICES TO FOLLOW:
1. Server Client Architecture (Both machines should not be depend of each other)
2. Always respect all HTTP methods (use GET, POST, PUT, PATCH, DELETE for specific use-case)
    - GET /user => read and return users data
    - POST /user => handle new user creation
    - PATCH /user => update the user

    RULES THAT ARE VIOLATING REST API RULES, BUT USED MOSTLY
    - POST /updateUser => Update exsting user
    - POST /createUser => Create new user
    - GET /getUser => to get user
    - POST /deleteUser => to delete existing user

### TO SEND SPECIFIC RESPONSE (USING EXPRESS)
FOR BROWSER => res.send() => HTML (Server Side Rendering)
FOR CROSS-PLATFORM => res.json() => JSON (Client Side Rendering)