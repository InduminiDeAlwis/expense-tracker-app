import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-xl w-96">
        <h1 className="text-xl font-bold mb-4">Register</h1>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;