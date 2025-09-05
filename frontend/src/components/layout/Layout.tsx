import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold">Expense Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
