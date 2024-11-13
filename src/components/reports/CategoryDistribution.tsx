import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Vendor } from '../../types';

interface CategoryDistributionProps {
  vendors: Vendor[];
}

export default function CategoryDistribution({ vendors }: CategoryDistributionProps) {
  const categoryDistribution = vendors.reduce((acc, vendor) => {
    acc[vendor.category] = (acc[vendor.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(categoryDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}