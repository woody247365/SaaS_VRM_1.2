import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Contract Renewal - Tech Solutions Inc',
    dueDate: '2024-03-25',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 2,
    title: 'Quarterly Performance Review - Global Services',
    dueDate: '2024-03-28',
    priority: 'medium',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Update Compliance Documents - Secure Systems',
    dueDate: '2024-03-30',
    priority: 'low',
    status: 'completed',
  },
];

const priorityColors = {
  high: 'text-red-600 bg-red-50',
  medium: 'text-yellow-600 bg-yellow-50',
  low: 'text-green-600 bg-green-50',
};

const statusIcons = {
  pending: Clock,
  'in-progress': AlertCircle,
  completed: CheckCircle,
};

export default function TaskOverview() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => {
          const StatusIcon = statusIcons[task.status];
          
          return (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <StatusIcon className="h-5 w-5 text-gray-400" />
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">Due {task.dueDate}</p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  priorityColors[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}