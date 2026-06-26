## What if we store session id in db?
### Problems:
- High latency (more time taken by server when responding, because db query)

Client ---------------------------------> Server
                id/password
TOKEN:
- Cookies - res.cookies.token - auto - for browser only
- Response - Headers (JSON) - Header "Authorization": "Bearer<token>"

- Cookies are domain specific. (security concern )
- domain
- expires
- httpOnly
- maxAge
- path
- secure
- signed
- sameSite

`expressjs.com/en/5x/api.html/#res.cookie`
cookies are available in browser only

for other clients like mobile applications, we use response (we send jwt token or session id in response)
client can store this token on user's device and send this token in req headers when needed.

Standard way:
```json
Headers: {
    "Authorization": "Bearer<token>"
}
```