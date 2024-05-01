// components/TaskStatusUpdate.js
import React from 'react';

const TaskStatusUpdate = ({ onUpdateStatus, assignedTo }) => {
  return (
    <div className="task-status-update">
      <h2>Update Task Status</h2>
      <button onClick={() => onUpdateStatus('in progress')} className="btn btn-primary btn-width-130">Start</button>
      <button onClick={() => onUpdateStatus('completed')}className="btn btn-primary btn-width-130">Complete</button>
    </div>
  );
}

export default TaskStatusUpdate;

