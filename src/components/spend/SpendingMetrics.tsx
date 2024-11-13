import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Percent, AlertTriangle, Target } from 'lucide-react';

interface SpendingMetricsProps {
  timeRange: string;
  category: string;
}

const metrics = [
  {
    title: 'Total Spend',
    value: '$1.2M',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-blue-500',
  },
  {
    title: 'Average Monthly',
    value: '$198.5K',
    change: '+5.2%',
    trend: 'up',
    icon: Target,
    color: 'bg-green-500',
  },
  {
    title: 'Cost Savings',
    value: '$45.2K',
    change: '+8.7%',
    trend: 'up',
    icon: Percent,
    color: 'bg-purple-500',
  },
  {
    title: 'Budget Variance',
    value: '-$12.3K',
    change: '-2.4%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'bg-red-500',
  },
];

export default function SpendingMetrics({ timeRange, category }: SpendingMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = metric.trend === 'up' ? 'text-green-600' : 'text-red-600';
        
        return (
          <div
            key={metric.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`${metric.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center ${trendColor}`}>
                <TrendIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{metric.value}</h3>
            <p className="text-gray-600 text-sm">{metric.title}</p>
          </div>
        );
      })}
    </div>
  );
}