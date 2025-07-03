import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Users, 
  Phone, 
  LogOut, 
  Menu, 
  X,
  Activity,
  Settings
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import toast from 'react-hot-toast';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Team', href: '/admin/team', icon: Users },
    { name: 'Contact', href: '/admin/contact', icon: Phone },
  ];

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      toast.success('Logged out successfully');
      navigate('/admin/login');
    } else {
      toast.error('Failed to logout');
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-900">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <SidebarContent navigation={navigation} location={location} onLogout={handleLogout} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <SidebarContent navigation={navigation} location={location} onLogout={handleLogout} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarContent = ({ navigation, location, onLogout }) => (
  <div className="flex flex-col h-full bg-gray-800">
    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
      <div className="flex items-center">
        <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">R</span>
        </div>
        <span className="ml-2 text-white font-semibold">Rossum Admin</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col overflow-y-auto">
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
            >
              <item.icon
                className={`${
                  isActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                } mr-3 flex-shrink-0 h-6 w-6`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200"
        >
          <LogOut className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300" />
          Sign out
        </button>
      </div>
    </div>
  </div>
);

export default AdminLayout;