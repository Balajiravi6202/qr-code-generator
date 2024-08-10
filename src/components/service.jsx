import React from 'react';

function Service() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-700">Description of the first service offered.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 2</h2>
          <p className="text-gray-700">Description of the second service offered.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Service 3</h2>
          <p className="text-gray-700">Description of the third service offered.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
