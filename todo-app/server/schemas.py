# schemas.py - Pydantic models for request and response validation

from pydantic import BaseModel
from datetime import date

class TodoBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False
    due_date: date | None = None
    priority: str | None = None

class TodoCreate(TodoBase):
    pass

class TodoUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    completed: bool | None = None
    due_date: date | None = None
    priority: str | None = None

class Todo(TodoBase):
    id: int

    class Config:
        from_attributes = True
