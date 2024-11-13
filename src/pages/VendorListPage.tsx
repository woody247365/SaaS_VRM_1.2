import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useVendors } from '../hooks/useVendors';
import { Vendor } from '../types';
import VendorList from '../components/vendors/VendorList';
import VendorForm from '../components/vendors/VendorForm';
import Modal from '../components/common/Modal';

export default function VendorListPage() {
  const { vendors, addVendor, updateVendor, deleteVendor } = useVendors();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVendor, setEditingVendor] = useState<Vendor | null>(null);

  const handleAddVendor = (data: Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>) => {
    addVendor(data);
    setIsModalOpen(false);
  };

  const handleUpdateVendor = (data: Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingVendor) {
      updateVendor(editingVendor.id, data);
      setEditingVendor(null);
      setIsModalOpen(false);
    }
  };

  const handleEdit = (vendor: Vendor) => {
    setEditingVendor(vendor);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      deleteVendor(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingVendor(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vendors</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Vendor</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <VendorList
          vendors={vendors}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingVendor ? 'Edit Vendor' : 'Add New Vendor'}
      >
        <VendorForm
          initialData={editingVendor || undefined}
          onSubmit={editingVendor ? handleUpdateVendor : handleAddVendor}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}