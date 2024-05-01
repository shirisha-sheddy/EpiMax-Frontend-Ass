// TaskAssignment.js
import React, { useState } from 'react';

const TaskAssignment = ({ taskId, users, onAssignTask, taskCount }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleAssignTask = () => {
    if (!selectedUser) {
      alert('Please select a user');
      return;
    }
    onAssignTask(taskId, selectedUser);
    setSelectedUser('');
  };

  return (
    <div className="task-assignment ml-5">
      <h2>Assign Task: {taskCount}</h2>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user, index) => (
          <option key={index} value={user}>{user}</option>
        ))}
      </select>
      <button onClick={handleAssignTask} className="btn btn-primary btn-width-130">Assign Task</button>
    </div>
  );
}

export default TaskAssignment;
