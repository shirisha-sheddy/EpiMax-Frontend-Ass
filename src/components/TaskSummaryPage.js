// components/TaskSummaryPage.js
import React from 'react';

const TaskSummaryPage = ({ taskMetrics }) => {
  return (
    <div className="task-summary-page">
      <h2>Task Summary</h2>
      <p>Total Tasks: {taskMetrics.totalTasks}</p>
      <p>Completed Tasks: {taskMetrics.completedTasks}</p>
    </div>
  );
}

export default TaskSummaryPage;
