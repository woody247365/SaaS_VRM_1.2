import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorListPage from './VendorListPage';
import VendorDetails from './VendorDetails';

export default function Vendors() {
  return (
    <Routes>
      <Route index element={<VendorListPage />} />
      <Route path=":id" element={<VendorDetails />} />
    </Routes>
  );
}