import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import EventsManager from './components/EventsManager';
import TeamManager from './components/TeamManager';
import ContactManager from './components/ContactManager';
import AdminLayout from './components/AdminLayout';
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext';
import { AdminDataProvider } from './context/AdminDataContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAdminAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

const AdminAppContent = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/events" element={<EventsManager />} />
                  <Route path="/team" element={<TeamManager />} />
                  <Route path="/contact" element={<ContactManager />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

const AdminApp = () => {
  return (
    <AdminAuthProvider>
      <AdminDataProvider>
        <AdminAppContent />
      </AdminDataProvider>
    </AdminAuthProvider>
  );
};

export default AdminApp;