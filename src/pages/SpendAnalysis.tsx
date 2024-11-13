import React, { useState } from 'react';
import { Filter, Download } from 'lucide-react';
import SpendingTrends from '../components/spend/SpendingTrends';
import CategorySpending from '../components/spend/CategorySpending';
import TopVendors from '../components/spend/TopVendors';
import SpendingMetrics from '../components/spend/SpendingMetrics';
import { useVendors } from '../hooks/useVendors';

export default function SpendAnalysis() {
  const { vendors } = useVendors();
  const [timeRange, setTimeRange] = useState('6m');
  const [category, setCategory] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Spend Analysis</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="rounded-md border-gray-300"
            >
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last Year</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border-gray-300"
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Consulting">Consulting</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Services</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            Export Data
          </button>
        </div>
      </div>

      <SpendingMetrics timeRange={timeRange} category={category} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingTrends timeRange={timeRange} category={category} />
        <CategorySpending timeRange={timeRange} />
      </div>

      <TopVendors timeRange={timeRange} category={category} vendors={vendors} />
    </div>
  );
}