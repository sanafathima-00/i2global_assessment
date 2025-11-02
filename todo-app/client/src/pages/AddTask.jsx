import React, { useState, useEffect } from "react";
import Card from "../components/common/Card";
import "./AddTask.css";
import Header from "../components/common/Header";
import AddTaskForm from "../components/AddTaskForm";
import Button from "../components/common/Button";

const AddTask = ({ isOpen, onClose, onSave, editingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    priority: "",
    category: "",
    dueDate: "",
    description: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        startDate: editingTask.start_date || "",
        priority: editingTask.priority || "",
        category: editingTask.category || "",
        dueDate: editingTask.due_date || "",
        description: editingTask.description || "",
      });
    } else {
      setFormData({
        title: "",
        startDate: "",
        priority: "",
        category: "",
        dueDate: "",
        description: "",
      });
    }
  }, [editingTask, isOpen]);

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

    // Validate dates
    const today = new Date().toISOString().split("T")[0];
    if (formData.startDate && formData.startDate < today) {
      alert("Start date must be today or later.");
      return;
    }
    if (formData.dueDate < (formData.startDate || today)) {
      alert("Due date must be on or after the start date (or today if no start date).");
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
      <Card className="add-task-modal-content">
        <Header title={editingTask ? "Edit Task" : "Add New Task"} level={1} align="center" style={{ marginBottom: '20px' }} />
        <AddTaskForm
          formData={formData}
          handleInputChange={handleInputChange}
          today={today}
        />
        <div className="add-task-actions">
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save Task</Button>
        </div>
      </Card>
    </div>
  );
};

export default AddTask;
