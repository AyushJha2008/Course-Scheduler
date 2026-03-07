# Frontend Infrastructure

## API Client (`frontend/src/api/axios.js`)
- Creates Axios instance with `baseURL: "http://localhost:8000/api"`.  
- Attaches JWT from `localStorage` to `Authorization` header. 

## Global Styles & Configs
- ESLint config: `frontend/eslint.config.js` enforces React hooks rules.   
- `index.html`: mounts `<div id="root">`.   
- Tailwind & PostCSS: `tailwind.config.js`, `postcss.config.js`.    
- Vite: `vite.config.js` enables React plugin. 

---

# Key Classes Reference

| Class/Component         | Location                                            | Responsibility                             |
|-------------------------|-----------------------------------------------------|--------------------------------------------|
| `API`                  | `frontend/src/api/axios.js`                         | Axios instance with auth interceptor       |
| `Login`                | `frontend/src/pages/Login.jsx`                      | Login form                                 |
| `AddCourse`            | `frontend/src/pages/AddCourse.jsx`                  | Course creation form                       |
| `CourseCard`           | `frontend/src/components/CourseCard.jsx`            | Course display card                        |
| `Navbar`               | `frontend/src/components/Navbar.jsx`                | Top-level navigation and logout            |

---