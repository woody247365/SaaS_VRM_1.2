import React from 'react';
import { useParams } from 'react-router-dom';
import { useVendors } from '../hooks/useVendors';
import { useTasks } from '../hooks/useTasks';
import VendorHeader from '../components/vendors/VendorHeader';
import VendorPerformance from '../components/vendors/VendorPerformance';
import VendorTasks from '../components/vendors/VendorTasks';
import VendorSpending from '../components/vendors/VendorSpending';

export default function VendorDetails() {
  const { id } = useParams<{ id: string }>();
  const { getVendor } = useVendors();
  const { getTasksByVendor } = useTasks();
  
  const vendor = getVendor(id!);
  const vendorTasks = getTasksByVendor(id!);

  if (!vendor) {
    return (
      <div className="p-6">
        <div className="text-center text-gray-500">Vendor not found</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <VendorHeader vendor={vendor} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VendorPerformance vendorId={vendor.id} />
        <VendorSpending vendorId={vendor.id} />
      </div>

      <VendorTasks tasks={vendorTasks} />
    </div>
  );
}