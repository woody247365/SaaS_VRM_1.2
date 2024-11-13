import React from 'react';
import { Vendor } from '../../types';

interface ComplianceFormProps {
  vendors: Vendor[];
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function ComplianceForm({ vendors, onSubmit, onCancel }: ComplianceFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      vendorId: formData.get('vendorId'),
      status: formData.get('status'),
      reviewDate: formData.get('reviewDate'),
      nextReviewDate: formData.get('nextReviewDate'),
      certifications: formData.getAll('certifications'),
      notes: formData.get('notes'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Vendor
          </label>
          <select
            name="vendorId"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Compliance Status
          </label>
          <select
            name="status"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="compliant">Compliant</option>
            <option value="non-compliant">Non-Compliant</option>
            <option value="pending">Pending Review</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Review Date
          </label>
          <input
            type="date"
            name="reviewDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Next Review Date
          </label>
          <input
            type="date"
            name="nextReviewDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Certifications
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="certifications"
                value="ISO 27001"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">ISO 27001</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="certifications"
                value="SOC 2"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">SOC 2</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="certifications"
                value="ISO 9001"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">ISO 9001</label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            name="notes"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Save Record
        </button>
      </div>
    </form>
  );
}