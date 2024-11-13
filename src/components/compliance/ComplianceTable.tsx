import React from 'react';
import { Vendor } from '../../types';
import { CheckCircle, AlertTriangle, Clock, ExternalLink } from 'lucide-react';

interface ComplianceTableProps {
  vendors: Vendor[];
}

const complianceData = {
  'Tech Solutions Inc': {
    status: 'compliant',
    lastReview: '2024-02-15',
    nextReview: '2024-05-15',
    certifications: ['ISO 27001', 'SOC 2'],
  },
  'Global Services Ltd': {
    status: 'pending',
    lastReview: '2024-01-20',
    nextReview: '2024-04-20',
    certifications: ['ISO 9001'],
  },
};

const statusConfig = {
  compliant: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
  },
  'non-compliant': {
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
  },
  pending: {
    icon: Clock,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
};

export default function ComplianceTable({ vendors }: ComplianceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Review
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Next Review
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Certifications
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vendors.map((vendor) => {
            const data = complianceData[vendor.name] || {
              status: 'pending',
              lastReview: '2024-01-01',
              nextReview: '2024-04-01',
              certifications: [],
            };
            const status = statusConfig[data.status];
            const StatusIcon = status.icon;
            
            return (
              <tr key={vendor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {vendor.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center`}>
                    <StatusIcon className={`h-5 w-5 ${status.color} mr-2`} />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${status.bgColor} ${status.textColor}`}>
                      {data.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.lastReview}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.nextReview}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-2">
                    {data.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}