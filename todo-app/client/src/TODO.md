# TODO: Date Validation in Add New Task Page

## Steps Completed

1. ✅ Edit `todo-app/client/src/pages/AddTask.jsx`:
   - Add validation in handleSave to check startDate >= today and dueDate >= startDate (or today if no startDate).
   - Display appropriate error messages using alert if validation fails.
