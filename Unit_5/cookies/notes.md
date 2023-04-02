# Cookies

- Data
  - Set by the web server
  - Stored by the web client
  - Cookies are sent back to the server on **every** request

## Uses

- Help with tracking both data and its time signature over a span of time (through the browser)
- Cookies store data without allocating/using server space
- Early version of **Local Storage** for storing objects on the client side.

## Limitations

- not secure
- not very large
  - client can restrict further
- users can erase them at any time.
  - browser settings can erase them after sessions.

## Cookie-Parser Dependency

- Stop our server to install the parser with the following command:
  `npm i cookie-parser`

  ## Local Storage vs Cookies

| Cookies                                   | Local Storage                           |
| ----------------------------------------- | --------------------------------------- |
| server-side reference                     | client-side reference                   |
| in headers request                        | server can't access                     |
| required when servers need to access data | stores user settings (light/dark modes) |
| Max size: 4096 bytes                      | Max size: 5MB                           |
| expires                                   | no expiration                           |
