# Jobs API

This is a **Node.js** API for managing job listings with user authentication and authorization. Users can register, log in, and perform **CRUD** operations (Create, Read, Update, Delete) on jobs, where each job is tied to a specific user.

Authentication is handled using **JWT** tokens, and passwords are securely hashed with **bcrypt**.

## Features

- **User Registration** with hashed passwords (bcrypt).
- **User Login** to receive a JWT token for authentication.
- **JWT Token Authentication** for protected routes.
- **CRUD Operations** for job listings (only the logged-in user can manage their jobs).
- Error handling for invalid credentials, missing fields, and unauthorized access.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose** ODM)
- **JWT** for authentication
- **bcrypt.js** for password hashing
- **dotenv** for environment variable management

## Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [MongoDB](https://www.mongodb.com/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/abdulnafih27/Jobs-API.git
   cd Jobs-API

#### Setup

```bash
npm install && npm start
```

2. Create a .env file in the root directory and add the following environment variables:
```bash
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
JWT_LIFETIME=1d
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit


# Jobs-API
