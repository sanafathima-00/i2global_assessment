# Full-Stack Todo App

A full-stack Todo application built with FastAPI (backend) and React (frontend).

## Project Structure

```
todo-app/
├── client/          # React frontend
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Different webpages
│       ├── services/    # API service files
│       └── styles/      # Custom CSS
└── server/          # Python FastAPI backend
    ├── main.py      # Entry point
    ├── database.py  # SQLite + SQLAlchemy setup
    ├── models.py    # Todo model
    ├── crud.py      # CRUD helper functions
    ├── schemas.py   # Pydantic models
    └── __init__.py
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
