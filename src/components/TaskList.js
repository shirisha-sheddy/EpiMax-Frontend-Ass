import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onUpdateStatus }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleStatusUpdate = (taskId, status) => {
    onUpdateStatus(taskId, status);
  };

  return (
    <div className="task-list-container">
      <h2>Task List ({tasks.length})</h2>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item">
            <div className="task-details">
              <div className="task-name">{`${index + 1}. ${task.name}`}</div>
              <div className="task-description">{task.description}</div>
              <div className="task-assignee">Assigned To: {task.assignedTo}</div>
              <div className={`task-status ${task.status}`} style={{ margin: '15px' }}>{task.status}</div> {/* Add margin bottom */}
            </div>
            <div>
              {/* Start Button */}
              {task.status === 'pending' && (
                <button className="btn btn-primary btn-width-130" onClick={() => handleStatusUpdate(task.id, 'started')}>Start</button>
              )}
              {/* Complete Button */}
              {task.status === 'started' && (
                <button className="btn btn-primary btn-width-130" onClick={() => handleStatusUpdate(task.id, 'completed')}>Complete</button>
              )}
              {/* Delete Button */}
              <button className="btn btn-primary btn-width-130" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
