import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

const performanceData = [
  { month: 'Jan', score: 85 },
  { month: 'Feb', score: 88 },
  { month: 'Mar', score: 92 },
  { month: 'Apr', score: 90 },
  { month: 'May', score: 95 },
  { month: 'Jun', score: 93 },
];

interface VendorPerformanceProps {
  vendorId: string;
}

export default function VendorPerformance({ vendorId }: VendorPerformanceProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold">Performance Metrics</h2>
        </div>
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Current Score</p>
          <p className="text-xl font-semibold text-green-600">93%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">YTD Average</p>
          <p className="text-xl font-semibold">90.5%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Trend</p>
          <p className="text-xl font-semibold text-green-600">+2.8%</p>
        </div>
      </div>
    </div>
  );
}