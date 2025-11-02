import React, { useState } from "react";
import "./AddTask.css";
import AddTaskHeader from "../components/AddTaskHeader";
import AddTaskForm from "../components/AddTaskForm";
import AddTaskActions from "../components/AddTaskActions";

const AddTask = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    priority: "",
    category: "",
    dueDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Validate required fields
    if (!formData.title.trim()) {
      alert("Task title is required.");
      return;
    }
    if (!formData.dueDate) {
      alert("Due date is required.");
      return;
    }
    if (!formData.priority) {
      alert("Priority is required.");
      return;
    }

    // Simulate save action
    console.log("Saving task:", formData);
    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      title: "",
      startDate: "",
      priority: "",
      category: "",
      dueDate: "",
      description: "",
    });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="add-task-modal-overlay" onClick={handleOverlayClick}>
      <div className="add-task-modal-content">
        <AddTaskHeader />
        <AddTaskForm
          formData={formData}
          handleInputChange={handleInputChange}
          today={today}
        />
        <AddTaskActions onClose={handleClose} onSave={handleSave} />
      </div>
    </div>
  );
};

export default AddTask;
