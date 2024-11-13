export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  status: 'active' | 'inactive';
  riskLevel: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  vendorId: string;
  assigneeId: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'viewer' | 'stakeholder';
  createdAt: Date;
}

export interface PerformanceMetric {
  id: string;
  vendorId: string;
  metric: string;
  value: number;
  target: number;
  date: Date;
}

export interface SpendAnalysis {
  id: string;
  vendorId: string;
  amount: number;
  category: string;
  date: Date;
  description: string;
}