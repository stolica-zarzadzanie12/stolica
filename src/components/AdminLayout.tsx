import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, LogOut, FileText, Settings, Users, Image } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <div className="p-4 border-b">
          <Link to="/admin" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[#DAA520]" />
            <span className="text-xl font-semibold" aria-label="Panel administracyjny Stolica">Panel administracyjny</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/blog"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-[#DAA520]"
                aria-label="Zarządzanie blogiem"
              >
                <FileText className="h-5 w-5 text-gray-500" />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/media"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-[#DAA520]"
                aria-label="Zarządzanie mediami"
              >
                <Image className="h-5 w-5 text-gray-500" />
                <span>Media</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-[#DAA520]"
                aria-label="Ustawienia panelu administracyjnego"
              >
                <Settings className="h-5 w-5 text-gray-500" />
                <span>Ustawienia</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-[#DAA520]"
                aria-label="Zarządzanie użytkownikami"
              >
                <Users className="h-5 w-5 text-gray-500" />
                <span>Użytkownicy</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200 w-full px-4 py-2"
            aria-label="Wyloguj się z panelu administracyjnego"
          >
            <LogOut className="h-5 w-5" />
            <span>Wyloguj się</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
};

export default AdminLayout;