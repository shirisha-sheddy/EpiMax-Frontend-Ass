// AddTaskForm.js
import React, { useState } from 'react';
import './AddTaskForm.css'; // Import CSS file for styling

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDescription.trim()) {
      alert('Please fill in all fields');
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      assignedTo: '',
      status: 'pending',
    };
    onAddTask(newTask);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div className="form-group">
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-width-130">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
