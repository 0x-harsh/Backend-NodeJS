## Authentication Patterns
There are two types of Authentication
1. Statefull
    - Which maintains state or data or server side
2. Stateless
    - Which has no state

### Statefull
Client --------- username & password -----------> Server
   |_____________________________________session uid_|
uid: 367

Client --------- GET /users | uid: 367 -----------> Server (Server checking who is user 367)
   |_____________________response: all users__________|
uid: 367

#### How to transfer uid?
Client <--------------cookies---------------> Server (used in server side rendering (ejs), we can use cookies because we are using a browser)
Client <--------------response---------------> Server
Client <--------------headers---------------> Server (generally used in REST apis)

#### Express Flow
Client --------> Auth Middleware ----------> Endpoint route
Auth Middleware: checks for cookie value or uid, if valid calls next() else rejects the request