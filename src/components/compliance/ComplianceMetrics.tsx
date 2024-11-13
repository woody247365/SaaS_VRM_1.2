import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Vendor } from '../../types';

interface ComplianceMetricsProps {
  vendors: Vendor[];
}

const metrics = [
  {
    title: 'Overall Compliance',
    value: '92%',
    change: '+3%',
    icon: Shield,
    color: 'bg-blue-500',
  },
  {
    title: 'High Risk Vendors',
    value: '5',
    change: '-2',
    icon: AlertTriangle,
    color: 'bg-red-500',
  },
  {
    title: 'Compliant Vendors',
    value: '45',
    change: '+5',
    icon: CheckCircle,
    color: 'bg-green-500',
  },
  {
    title: 'Pending Reviews',
    value: '8',
    change: '-3',
    icon: Clock,
    color: 'bg-yellow-500',
  },
];

export default function ComplianceMetrics({ vendors }: ComplianceMetricsProps) {
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
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
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