import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
