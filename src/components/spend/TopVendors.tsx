import React from 'react';
import { Vendor } from '../../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TopVendorsProps {
  vendors: Vendor[];
  timeRange: string;
  category: string;
}

const mockSpendData = {
  'Tech Solutions Inc': { spend: 245000, trend: '+5.2%', positive: true },
  'Global Services Ltd': { spend: 198000, trend: '-2.1%', positive: false },
  'Secure Systems': { spend: 156000, trend: '+3.8%', positive: true },
};

export default function TopVendors({ vendors, timeRange, category }: TopVendorsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Top Vendors by Spend</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vendor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Spend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vendors.slice(0, 5).map((vendor) => {
              const spendInfo = mockSpendData[vendor.name] || {
                spend: 100000,
                trend: '+0.0%',
                positive: true,
              };
              
              return (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {vendor.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${spendInfo.spend.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm ${
                      spendInfo.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {spendInfo.positive ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {spendInfo.trend}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}