import React, { useState } from 'react';
import VendorMetrics from '../components/Dashboard/VendorMetrics';
import TaskOverview from '../components/Dashboard/TaskOverview';
import SpendingChart from '../components/Dashboard/SpendingChart';
import Modal from '../components/common/Modal';
import VendorForm from '../components/vendors/VendorForm';
import { useVendors } from '../hooks/useVendors';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addVendor } = useVendors();

  const handleAddVendor = (data) => {
    addVendor(data);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Add New Vendor
        </button>
      </div>

      <VendorMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskOverview />
        <SpendingChart />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Vendor"
      >
        <VendorForm
          onSubmit={handleAddVendor}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}