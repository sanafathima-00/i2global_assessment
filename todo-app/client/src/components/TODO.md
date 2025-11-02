# Refactoring Plan for React To-Do App (Updated with Feedback)

## Information Gathered
- **Project Structure**: React app with components in `src/components/`, pages in `src/pages/`, and styles in `src/styles/`.
- **Existing Components**:
  - `AddTask.jsx` (page): Modal for adding tasks with form, header, and actions.
  - `AddTaskHeader.jsx`: Simple header component.
  - `AddTaskForm.jsx`: Form with inputs for task details.
  - `AddTaskField.jsx`: Reusable input/select field.
  - `AddTaskActions.jsx`: Cancel/Save buttons.
  - `AddTaskButton.jsx`: Button to open add task modal.
  - `WorkToDo.jsx` (page): Main page with search, task list, and add button.
  - `SearchBar.jsx`: Search input with icon.
  - `TaskList.jsx`: Container for task items.
  - `TaskItem.jsx`: Individual task display with checkbox, text, due date, priority, delete.
  - `Header.jsx`: Page header (seems unused in current structure).
- **Styling**: Uses CSS variables from `variables.css` for light/dark themes, consistent fonts, spacing.
- **Repetitive Elements**:
  - Buttons: Various styles (primary, secondary, different sizes).
  - Inputs: Text, date, select, textarea with theme support.
  - Headers: Different levels (h1, h2, etc.).
  - Cards: Containers with padding, shadows, borders.

## Plan (Incorporating Feedback) ✅
1. **Create Common Components** (Completed):
   - `Button.jsx` & `Button.css`: Reusable button with variants (primary/secondary), sizes (small/medium/large), loading, and icon props.
   - `FormField.jsx` & `FormField.css`: Reusable input/select/textarea (renamed from Input to avoid confusion).
   - `Header.jsx` & `Header.css`: Reusable header with levels (h1-h6), optional subtitle, and align prop.
   - `Card.jsx` & `Card.css`: Reusable card container with padding, shadow, border radius, and variant prop.

2. **Update Existing Components** (Completed):
   - Replaced `AddTaskHeader.jsx` with `common/Header`.
   - Updated `AddTaskForm.jsx` to use `common/FormField` instead of `AddTaskField` and raw inputs.
   - Replaced `AddTaskActions.jsx` with `common/Button`.
   - Replaced `AddTaskButton.jsx` with `common/Button`.
   - Updated `SearchBar.jsx` to use `common/FormField`.
   - Updated `WorkToDo.jsx` to use `common/Header` for page title and `common/Card` for the main container.
   - Updated `AddTask.jsx` to use `common/Card` for modal content.

3. **Delete Unused Files**:
   - `AddTaskHeader.jsx` and `AddTaskHeader.css`.
   - `AddTaskField.jsx` and `AddTaskField.css`.
   - `AddTaskActions.jsx` and `AddTaskActions.css`.
   - `AddTaskButton.jsx` and `AddTaskButton.css`.
   - `Header.jsx` and `Header.css` (if not used elsewhere).
   - `common/Input.jsx` and `common/Input.css` (renamed to FormField).

## Followup Steps
- Test the app after each major replacement to ensure functionality.
- Verify light/dark mode themes still apply correctly.
- Check responsive design on different screen sizes.
- Ensure no console errors or broken imports.
- Commit separately after each component update for easy rollback.
