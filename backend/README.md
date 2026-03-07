# Application Entry & Configuration

## `backend/index.js`
- Sets up Express with CORS (origin `http://localhost:5173`), JSON parsing, cookie parser.  
- Mounts routes:  
  - `/api/auth` → `auth.route.js`  
  - `/api/instructors` → `instructor.route.js`  
  - `/api/courses` → `course.route.js`  
  - `/api/lectures` → `lecture.route.js`  
- Starts server on `process.env.PORT || 3000`. 

## `backend/package.json`
Lists dependencies: Express, Mongoose, JWT, bcrypt, dotenv, cors, cookie-parser, nodemon. 

---

# Middleware & Utilities

## Authentication Middleware (`backend/middlewares/auth.middleware.js`)
- `isAuthenticated`: Verifies JWT in `Authorization` header; sets `req.user`.  
- `isAdmin`: Ensures `req.user.role === "admin"`; else 403. 

## Database Connector (`backend/utils/database.utils.js`)
- `connectDB()`: Connects to MongoDB via `process.env.MONGO_URL`. Logs status. 

---

### Key Classes Reference

| Class           | Location                                              | Responsibility                  |
|-----------------|-------------------------------------------------------|---------------------------------|
| `Instructor`    | `backend/models/instructor.model.js`                  | Defines user schema            |
| `login`         | `backend/controllers/auth.controller.js`              | Handles authentication logic   |
| `isAuthenticated`| `backend/middlewares/auth.middleware.js`              | Verifies JWT on protected routes |

