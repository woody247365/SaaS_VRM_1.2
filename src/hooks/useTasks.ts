import { useState } from 'react';
import { Task } from '../types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Contract Renewal Review',
    description: 'Review and prepare contract renewal documentation for Tech Solutions Inc.',
    vendorId: '1',
    assigneeId: 'user1',
    dueDate: new Date('2024-03-25'),
    status: 'pending',
    priority: 'high',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    title: 'Quarterly Performance Assessment',
    description: 'Conduct quarterly performance review for Global Services Ltd.',
    vendorId: '2',
    assigneeId: 'user2',
    dueDate: new Date('2024-03-28'),
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-10'),
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
    return newTask;
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...updates, updatedAt: new Date() }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const getTask = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  const getTasksByVendor = (vendorId: string) => {
    return tasks.filter((task) => task.vendorId === vendorId);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    getTask,
    getTasksByVendor,
  };
}