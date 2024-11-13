import { useState } from 'react';
import { Vendor } from '../types';

// Simulated vendor data - In a real app, this would come from an API
const initialVendors: Vendor[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc',
    email: 'contact@techsolutions.com',
    phone: '+1 (555) 123-4567',
    category: 'Technology',
    status: 'active',
    riskLevel: 'low',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    name: 'Global Services Ltd',
    email: 'info@globalservices.com',
    phone: '+1 (555) 987-6543',
    category: 'Consulting',
    status: 'active',
    riskLevel: 'medium',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-10'),
  },
];

export function useVendors() {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);

  const addVendor = (vendor: Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newVendor: Vendor = {
      ...vendor,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setVendors((prev) => [newVendor, ...prev]);
    return newVendor;
  };

  const updateVendor = (id: string, updates: Partial<Vendor>) => {
    setVendors((prev) =>
      prev.map((vendor) =>
        vendor.id === id
          ? { ...vendor, ...updates, updatedAt: new Date() }
          : vendor
      )
    );
  };

  const deleteVendor = (id: string) => {
    setVendors((prev) => prev.filter((vendor) => vendor.id !== id));
  };

  const getVendor = (id: string) => {
    return vendors.find((vendor) => vendor.id === id);
  };

  const getVendorsByCategory = (category: string) => {
    return vendors.filter((vendor) => vendor.category === category);
  };

  const getVendorsByRiskLevel = (riskLevel: 'low' | 'medium' | 'high') => {
    return vendors.filter((vendor) => vendor.riskLevel === riskLevel);
  };

  const getActiveVendors = () => {
    return vendors.filter((vendor) => vendor.status === 'active');
  };

  return {
    vendors,
    addVendor,
    updateVendor,
    deleteVendor,
    getVendor,
    getVendorsByCategory,
    getVendorsByRiskLevel,
    getActiveVendors,
  };
}