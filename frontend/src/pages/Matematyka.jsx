// src/pages/Matematyka.jsx
import React from 'react';

function Matematyka() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="text-center py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500 mb-6">
            Matematyka
          </h1>
          <p className="text-gray-700 text-md sm:text-lg">
            Przeglądaj materiały, testy i zasoby do nauki matematyki.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-10">
        {/* Treść strony Matematyka */}
        <p className="text-center text-lg">
          Tutaj znajdziesz materiały do nauki matematyki, w tym przykłady zadań, testy i zasoby.
        </p>
      </main>
    </div>
  );
}

export default Matematyka;
