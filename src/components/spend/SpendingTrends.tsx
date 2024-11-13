import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SpendingTrendsProps {
  timeRange: string;
  category: string;
}

const data = [
  { month: 'Jan', actual: 185000, projected: 190000 },
  { month: 'Feb', actual: 195000, projected: 188000 },
  { month: 'Mar', actual: 187000, projected: 185000 },
  { month: 'Apr', actual: 198000, projected: 195000 },
  { month: 'May', actual: 201000, projected: 198000 },
  { month: 'Jun', actual: 199000, projected: 200000 },
];

export default function SpendingTrends({ timeRange, category }: SpendingTrendsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Spending Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6' }}
              name="Actual Spend"
            />
            <Line
              type="monotone"
              dataKey="projected"
              stroke="#9CA3AF"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#9CA3AF' }}
              name="Projected Spend"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}