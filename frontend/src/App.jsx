import React from 'react';

// Add this to your index.css or App.css
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

const MathemaApp = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-800 text-white font-['Inter',sans-serif]">
      {/* Header with proper padding */}
      <header className="flex justify-between items-center px-12 py-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-600 rounded-full mr-2"></div>
          <span className="text-lg">mathema</span>
        </div>
        <button className="text-gray-300 hover:text-white">login</button>
      </header>

      {/* Main content with proper padding and centering */}
      <main className="px-12 py-8 max-w-6xl mx-auto">
        {/* Hero section */}
        <section className="mt-12 mb-32 relative">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-4 text-white">
              mathematics,
              <br />
              reinvented.
            </h1>
            <p className="text-xl mb-6 text-white font-light">build mathematic intuition, the right way.</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              explore topics
            </button>
          </div>
          
          {/* Mathematical diagram placeholder */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <svg width="300" height="200" viewBox="0 0 300 200" className="text-white">
              <path d="M0,100 Q150,0 300,200" stroke="white" fill="none" strokeWidth="1" />
              <path d="M0,150 L300,0" stroke="white" fill="none" strokeWidth="1" />
            </svg>
          </div>
        </section>

        {/* Simplified placeholder for the bottom panel */}
        <section className="mt-auto">
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg h-40 flex items-center justify-center">
            <p className="text-zinc-500">Interactive learning interface placeholder</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MathemaApp;