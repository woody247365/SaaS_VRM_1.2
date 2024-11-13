import React, { useState } from 'react';
import { useVendors } from '../hooks/useVendors';
import { Download, Filter } from 'lucide-react';
import VendorPerformanceTable from '../components/reports/VendorPerformanceTable';
import RiskDistributionChart from '../components/reports/RiskDistributionChart';
import CategoryDistribution from '../components/reports/CategoryDistribution';

export default function Reports() {
  const { vendors, getVendorsByCategory, getVendorsByRiskLevel } = useVendors();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('all');

  const filteredVendors = vendors.filter(vendor => {
    const categoryMatch = selectedCategory === 'all' || vendor.category === selectedCategory;
    const riskMatch = selectedRiskLevel === 'all' || vendor.riskLevel === selectedRiskLevel;
    return categoryMatch && riskMatch;
  });

  const handleExport = () => {
    // Convert filtered vendors to CSV
    const headers = ['Name', 'Category', 'Risk Level', 'Status', 'Performance Score'];
    const csvContent = [
      headers.join(','),
      ...filteredVendors.map(vendor => 
        [vendor.name, vendor.category, vendor.riskLevel, vendor.status, '92%'].join(',')
      )
    ].join('\n');

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vendor-report.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border-gray-300"
          >
            <option value="all">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Consulting">Consulting</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Services">Services</option>
          </select>
          <select
            value={selectedRiskLevel}
            onChange={(e) => setSelectedRiskLevel(e.target.value)}
            className="rounded-md border-gray-300"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
        </div>

        <VendorPerformanceTable vendors={filteredVendors} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskDistributionChart vendors={vendors} />
        <CategoryDistribution vendors={vendors} />
      </div>
    </div>
  );
}