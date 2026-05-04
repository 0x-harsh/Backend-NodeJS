# Nodejs Architecture

Client ------- reqests -------> Server (Nodejs)

Request ----> Event Queue ------> Event Loop 
Event Loop: watches event queue everytime for requests, works on FIFO principle, picks requests one by one

Types of request:
- Blocking Operations (Sync Task)
- Non-Blocking Operations (Async Task)

Event loop picks a request, check its type (blocking, non-blocking)
- If non-blocking, it process the request, and send the response.
- if blocking, it sends it to a thread pool

Blocking Operations -------- i need a thread / worker ------> Thread Pool
- assigns a worker and make him work
- Thread Pool -----> Returns the result

Note: Threads / Workers are limited (4 by default)

**Its always a good practice to having non-blocing (async) operations**

Default Thread Pool Size = 4
Max? - depends on the cores of the cpu, (8 core cpu, max=8)

```javascript
const os = require('os')

console.log(os.cpus().length) // 2, so max no. of length is 2
```

### *Its always a good practice to having non-blocing (async) operations*