# Handling URLs in NodeJS

## URL (Uniform Resource Locator)

- **https://www.piyushgarg.dev/**
- **https://www.piyushgarg.dev/project/1**
- **https://www.piyushgarg.dev/search?userId=1&a=2**

<table>
    <tr>
        <th>Name</th>
        <th>Example</th>
        <th>Meaning</th>
        <th>More Examples</th>
    </tr>
    <tr>
        <td><b>Protocol (set of rules to communication with server)</b></td>
        <td>https://</td>
        <td>Hyper Text Transfer Protocol Secure</td>
        <td>http, ws (websocket)</td>
    </tr>
    <tr>
        <td><b>Domain (user friendly name of ip address of a website)</b></td>
        <td>www.piyushgarg.dev</td>
        <td>user friendly name for a ip address</td>
        <td>google.com, youtube.com, github.com</td>
    </tr>
    <tr>
        <td><b>Path (actual path of a resource on a server)</b></td>
        <td>/</td>
        <td>Home or Root Path</td>
        <td>/ (root path), /home, /about, /contact</td>
    </tr>
    <tr>
        <td><b>Nested Path</b></td>
        <td>/project/1</td>
        <td>Nested Path</td>
        <td>/blog/post/1, /student/abc123</td>
    </tr>
    <tr>
        <td><b>Query Parameters</b></td>
        <td>?userId=1&a=2</td>
        <td>extra information we can send</td>
        <td>?search=hello, youtube.com/results?search_query=javascript+tutorial</td>
    </tr>
</table>