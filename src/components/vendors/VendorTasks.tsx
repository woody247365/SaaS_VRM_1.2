import React from 'react';
import { Task } from '../../types';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VendorTasksProps {
  tasks: Task[];
}

const statusIcons = {
  pending: Clock,
  'in-progress': AlertCircle,
  completed: CheckCircle,
};

const statusColors = {
  pending: 'text-yellow-500',
  'in-progress': 'text-blue-500',
  completed: 'text-green-500',
};

export default function VendorTasks({ tasks }: VendorTasksProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Associated Tasks</h2>
        <Link
          to="/tasks/new"
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Create Task
        </Link>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No tasks found</p>
        ) : (
          tasks.map((task) => {
            const StatusIcon = statusIcons[task.status];
            return (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <StatusIcon className={`h-5 w-5 ${statusColors[task.status]}`} />
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-sm text-gray-500">
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/tasks/${task.id}`}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  View Details
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}