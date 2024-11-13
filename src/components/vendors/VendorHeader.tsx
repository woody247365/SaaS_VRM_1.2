import React from 'react';
import { ArrowLeft, Building2, Mail, Phone, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Vendor } from '../../types';

interface VendorHeaderProps {
  vendor: Vendor;
}

const riskLevelColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export default function VendorHeader({ vendor }: VendorHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Link
          to="/vendors"
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{vendor.name}</h1>
          <p className="text-gray-500">{vendor.category}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center space-x-3">
          <Building2 className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium capitalize">{vendor.status}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a href={`mailto:${vendor.email}`} className="font-medium text-blue-600 hover:text-blue-700">
              {vendor.email}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <a href={`tel:${vendor.phone}`} className="font-medium">
              {vendor.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Shield className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Risk Level</p>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${riskLevelColors[vendor.riskLevel]}`}>
              {vendor.riskLevel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}