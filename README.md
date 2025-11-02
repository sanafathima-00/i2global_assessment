# Full-Stack Todo App

This full-stack Todo application allows users to efficiently manage their tasks with a modern web interface built using React for the frontend and FastAPI for the backend. Users can add new tasks by specifying details such as title, description, category (Projects, Work, Study), priority, start date, and due date through an intuitive modal form. The application provides a comprehensive task list view where users can browse, search, and filter their todos, with options to mark tasks as completed or delete them as needed. Tasks are stored in a SQLite database via SQLAlchemy, ensuring data persistence and reliable CRUD operations through RESTful API endpoints. The responsive design supports both light and dark modes, with customizable styling and FontAwesome icons for an enhanced user experience. Additionally, the app includes interactive features like task editing, real-time updates, and a clean, organized layout to help users stay productive and organized.

## Tech Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs with Python.
- **Uvicorn**: ASGI server for running FastAPI applications.
- **SQLAlchemy**: SQL toolkit and Object-Relational Mapping (ORM) for database interactions.
- **Pydantic**: Data validation and settings management using Python type annotations.
- **python-multipart**: Handling multipart/form-data for file uploads.
- **fastapi-cors**: CORS middleware for FastAPI.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Scripts**: Build scripts and development server for React apps.
- **Testing Library**: Utilities for testing React components.
- **FontAwesome**: Icon library for UI elements.

## Project Structure

```
todo-app/
├── client/                          # React frontend
│   ├── .gitignore                   # Git ignore file for frontend
│   ├── package-lock.json            # Lockfile for npm dependencies
│   ├── package.json                 # Frontend dependencies and scripts
│   ├── README.md                    # Frontend-specific documentation
│   ├── public/                      # Static assets
│   │   ├── favicon.ico              # Favicon
│   │   ├── index.html               # Main HTML file
│   │   ├── logo.png                 # Logo image
│   │   ├── logo192.png              # Logo for PWA
│   │   ├── logo512.png              # Logo for PWA
│   │   ├── manifest.json            # PWA manifest
│   │   └── robots.txt               # Robots file
│   └── src/                         # Source code
│       ├── App.css                  # Main app styles
│       ├── App.jsx                  # Main app component
│       ├── index.css                # Global styles
│       ├── index.js                 # Entry point
│       ├── TODO.md                  # Todo list for frontend
│       ├── components/              # Reusable React components
│       │   ├── AddTaskForm.css      # Styles for AddTaskForm
│       │   ├── AddTaskForm.jsx      # Add task form component
│       │   ├── NavBar.css           # Styles for NavBar
│       │   ├── NavBar.jsx           # Navigation bar component
│       │   ├── SearchBar.css        # Styles for SearchBar
│       │   ├── SearchBar.jsx        # Search bar component
│       │   ├── TaskItem.css         # Styles for TaskItem
│       │   ├── TaskItem.jsx         # Task item component
│       │   ├── TaskList.css         # Styles for TaskList
│       │   ├── TaskList.jsx         # Task list component
│       │   ├── TODO.md              # Todo list for components
│       │   └── common/              # Shared components
│       │       ├── Button.css       # Styles for Button
│       │       ├── Button.jsx       # Button component
│       │       ├── Card.css         # Styles for Card
│       │       ├── Card.jsx         # Card component
│       │       ├── FormField.css    # Styles for FormField
│       │       ├── FormField.jsx    # Form field component
│       │       ├── Header.css       # Styles for Header
│       │       └── Header.jsx       # Header component
│       ├── pages/                   # Page components
│       │   ├── AddTask.css          # Styles for AddTask page
│       │   ├── AddTask.jsx          # Add task page
│       │   ├── WorkToDo.css         # Styles for WorkToDo page
│       │   └── WorkToDo.jsx         # Work to do page
│       ├── services/                # API service files
│       │   └── api.js               # API service
│       └── styles/                  # Custom CSS and variables
│           └── variables.css        # CSS variables
└── server/                          # Python FastAPI backend
    ├── __init__.py                  # Package initializer
    ├── crud.py                      # CRUD helper functions
    ├── database.py                  # SQLite + SQLAlchemy setup
    ├── main.py                      # Entry point
    ├── models.py                    # Todo model
    ├── requirements.txt             # Backend dependencies
    ├── schemas.py                   # Pydantic models
    └── todos.db                     # SQLite database file
```

## API Endpoints

- `GET /api/todos` - Retrieve all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/{todo_id}` - Retrieve a specific todo by ID
- `PUT /api/todos/{todo_id}` - Update a specific todo by ID
- `DELETE /api/todos/{todo_id}` - Delete a specific todo by ID

## Setup Instructions

### Prerequisites
- Python 3.10+
- Node.js 18+

### Backend Setup
1. Navigate to the server directory:
   ```
   cd todo-app/server
   ```
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Run the server:
   ```
   uvicorn main:app --reload
   ```

The backend will be available at `http://localhost:8000` with API docs at `http://localhost:8000/docs`.

### Frontend Setup
1. Navigate to the client directory:
   ```
   cd todo-app/client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.
