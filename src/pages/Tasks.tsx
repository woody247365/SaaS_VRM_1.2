import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import Modal from '../components/common/Modal';

export default function Tasks() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    addTask(data);
    setIsModalOpen(false);
  };

  const handleUpdateTask = (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingTask) {
      updateTask(editingTask.id, data);
      setEditingTask(null);
      setIsModalOpen(false);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Create Task</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      >
        <TaskForm
          initialData={editingTask || undefined}
          onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}