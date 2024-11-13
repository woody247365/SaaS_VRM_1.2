import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Vendor } from '../../types';

interface RiskDistributionChartProps {
  vendors: Vendor[];
}

const COLORS = {
  low: '#22C55E',
  medium: '#EAB308',
  high: '#EF4444',
};

export default function RiskDistributionChart({ vendors }: RiskDistributionChartProps) {
  const riskDistribution = vendors.reduce((acc, vendor) => {
    acc[vendor.riskLevel] = (acc[vendor.riskLevel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(riskDistribution).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Risk Distribution</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[entry.name.toLowerCase()]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}