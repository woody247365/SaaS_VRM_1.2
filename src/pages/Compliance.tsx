import React, { useState } from 'react';
import { Filter, Download, Plus } from 'lucide-react';
import { useVendors } from '../hooks/useVendors';
import ComplianceMetrics from '../components/compliance/ComplianceMetrics';
import ComplianceTable from '../components/compliance/ComplianceTable';
import CertificationStatus from '../components/compliance/CertificationStatus';
import RiskAssessment from '../components/compliance/RiskAssessment';
import Modal from '../components/common/Modal';
import ComplianceForm from '../components/compliance/ComplianceForm';

export default function Compliance() {
  const { vendors } = useVendors();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleAddCompliance = (data) => {
    // Handle adding new compliance record
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Compliance Management</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Compliance Record
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      <ComplianceMetrics vendors={vendors} />

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="rounded-md border-gray-300"
          >
            <option value="all">All Vendors</option>
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-md border-gray-300"
          >
            <option value="all">All Statuses</option>
            <option value="compliant">Compliant</option>
            <option value="pending">Pending Review</option>
            <option value="non-compliant">Non-Compliant</option>
          </select>
        </div>

        <ComplianceTable vendors={vendors} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CertificationStatus vendors={vendors} />
        <RiskAssessment vendors={vendors} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Compliance Record"
      >
        <ComplianceForm
          vendors={vendors}
          onSubmit={handleAddCompliance}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}