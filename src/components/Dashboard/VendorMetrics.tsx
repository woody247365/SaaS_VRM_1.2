import React from 'react';
import { Users, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const metrics = [
  {
    title: 'Total Vendors',
    value: '156',
    change: '+12%',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'High Risk Vendors',
    value: '8',
    change: '-2',
    icon: AlertTriangle,
    color: 'bg-red-500',
  },
  {
    title: 'Performance Score',
    value: '92%',
    change: '+5%',
    icon: TrendingUp,
    color: 'bg-green-500',
  },
  {
    title: 'Monthly Spend',
    value: '$284.5K',
    change: '+8.2%',
    icon: DollarSign,
    color: 'bg-purple-500',
  },
];

export default function VendorMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        
        return (
          <div
            key={metric.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`${metric.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{metric.value}</h3>
            <p className="text-gray-600 text-sm">{metric.title}</p>
          </div>
        );
      })}
    </div>
  );
}