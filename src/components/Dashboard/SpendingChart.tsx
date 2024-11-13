import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', amount: 65000 },
  { month: 'Feb', amount: 59000 },
  { month: 'Mar', amount: 80000 },
  { month: 'Apr', amount: 81000 },
  { month: 'May', amount: 56000 },
  { month: 'Jun', amount: 55000 },
  { month: 'Jul', amount: 40000 },
];

export default function SpendingChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Monthly Spending</h2>
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 7 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
            />
            <Bar
              dataKey="amount"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}