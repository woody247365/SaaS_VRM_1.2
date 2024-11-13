import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign } from 'lucide-react';

const spendingData = [
  { month: 'Jan', amount: 45000 },
  { month: 'Feb', amount: 52000 },
  { month: 'Mar', amount: 48000 },
  { month: 'Apr', amount: 51000 },
  { month: 'May', amount: 46000 },
  { month: 'Jun', amount: 55000 },
];

interface VendorSpendingProps {
  vendorId: string;
}

export default function VendorSpending({ vendorId }: VendorSpendingProps) {
  const totalSpend = spendingData.reduce((sum, data) => sum + data.amount, 0);
  const avgSpend = totalSpend / spendingData.length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold">Spending Analysis</h2>
        </div>
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={spendingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
            />
            <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Total Spend</p>
          <p className="text-xl font-semibold">
            ${totalSpend.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Average Monthly</p>
          <p className="text-xl font-semibold">
            ${Math.round(avgSpend).toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">YoY Change</p>
          <p className="text-xl font-semibold text-green-600">+8.2%</p>
        </div>
      </div>
    </div>
  );
}