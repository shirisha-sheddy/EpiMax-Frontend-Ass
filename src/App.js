import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskAssignment from './components/TaskAssignment';
import TaskSummaryPage from './components/TaskSummaryPage';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users] = useState(['User 1', 'User 2', 'User 3']);
  const [taskCounts, setTaskCounts] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
      setTaskCounts(Array(savedTasks.length).fill(1)); // Initialize counts for each task
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setTaskCounts([...taskCounts, taskCounts.length + 1]); // Increment count for the new task
  };

  const handleAssignTask = (taskId, assignedTo, index) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, assignedTo };
      }
      return task;
    });
    setTasks(updatedTasks);

    const updatedCounts = [...taskCounts];
    updatedCounts[index]++; // Increment count for the assigned task
    setTaskCounts(updatedCounts);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setTaskCounts(taskCounts.filter((_, index) => index !== taskId)); // Remove corresponding count
  };

  // Add function to update task status
  const handleUpdateStatus = (taskId, status) => {
    const task = tasks.find(task => task.id === taskId);
    if (!task.assignedTo && status === 'started') {
      alert('Need to Assign Task');
      return;
    }
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Calculate task metrics
  const taskMetrics = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(task => task.status === 'completed').length
  };

  return (
    <div className="app">
      <h1>Task Management Application</h1>
      <div className="container">
        <div className="left-panel">
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onUpdateStatus={handleUpdateStatus} />
        </div>
        <div className="right-panel">
          <TaskSummaryPage taskMetrics={taskMetrics} />
          {tasks.map((task, index) => (
            <div key={task.id}>
              <TaskAssignment
                taskId={task.id}
                users={users}
                onAssignTask={(taskId, assignedTo) => handleAssignTask(taskId, assignedTo, index)}
                taskCount={taskCounts[index]} // Pass the count for this task
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
