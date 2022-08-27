# customerServiceApp



## Backend API

Postman collections: https://www.getpostman.com/collections/db683f5cb986539531f0

Registration: POST http://localhost:5000/user/signup

```json
{
    "firstName": "first1",
    "lastName": "last",
    "email": "test123@gmail.com",
    "password": "admin123",
    "confirmPassword": "admin123"
}
```

Authentication: POST http://localhost:5000/user/auth

```json
{
    "email":"test123@gmail.com",
    "password": "admin123"
}
```

## Backend Configuration

.env under server folder 

```javascript
PORT = 5000
CONNECTION_URL = <mongodb_url>
```
