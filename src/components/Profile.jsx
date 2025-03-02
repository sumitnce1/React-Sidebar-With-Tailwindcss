import React from "react";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Avatar Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="../../vite.svg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border-1 p-2 bg-green-100 shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">SUMIT KUMAR</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Name</h3>
          <p className="text-gray-700">SUMIT KUMAR</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
          <p className="text-gray-700">1234 Main Street, City, Country</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Mobile</h3>
          <p className="text-gray-700">+123 456 7890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <p className="text-gray-700">johndoe@example.com</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
