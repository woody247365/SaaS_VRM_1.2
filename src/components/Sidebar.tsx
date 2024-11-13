import React from 'react';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  FileBarChart,
  DollarSign,
  Shield,
  Settings,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Vendors', path: '/vendors' },
  { icon: ClipboardList, label: 'Tasks', path: '/tasks' },
  { icon: FileBarChart, label: 'Reports', path: '/reports' },
  { icon: DollarSign, label: 'Spend Analysis', path: '/spend' },
  { icon: Shield, label: 'Compliance', path: '/compliance' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">VRM Platform</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}