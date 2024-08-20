import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';
import { FlipWords } from '../ui/FilpWords'; // Import FlipWords
import {
  CalculatorIcon,
  AcademicCapIcon,
  BeakerIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  UserCircleIcon,
  ClockIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

// Lista przedmiotów z pastelowymi kolorami i ścieżkami
const subjects = [
  { id: 1, title: "Matematyka", icon: <CalculatorIcon className="h-12 w-12 text-teal-600" />, color: "bg-teal-200" },
  { id: 2, title: "Fizyka", icon: <AcademicCapIcon className="h-12 w-12 text-blue-600" />, color: "bg-blue-200" },
  { id: 3, title: "Biologia", icon: <BeakerIcon className="h-12 w-12 text-green-600" />, color: "bg-green-200" },
  { id: 4, title: "Chemia", icon: <BeakerIcon className="h-12 w-12 text-teal-600" />, color: "bg-teal-200" },
  { id: 5, title: "Geografia", icon: <GlobeAltIcon className="h-12 w-12 text-orange-600" />, color: "bg-orange-200" },
  { id: 6, title: "Język Polski", icon: <DocumentTextIcon className="h-12 w-12 text-red-600" />, color: "bg-red-200" },
  { id: 7, title: "Język Angielski", icon: <DocumentTextIcon className="h-12 w-12 text-teal-600" />, color: "bg-teal-300" },
  { id: 8, title: "Informatyka", icon: <CodeBracketIcon className="h-12 w-12 text-gray-600" />, color: "bg-gray-200" },
  { id: 9, title: "Język Niemiecki", icon: <UserCircleIcon className="h-12 w-12 text-yellow-600" />, color: "bg-yellow-200" },
  { id: 10, title: "Historia", icon: <ClockIcon className="h-12 w-12 text-gray-600" />, color: "bg-gray-300" },
  { id: 11, title: "WOS", icon: <UsersIcon className="h-12 w-12 text-purple-600" />, color: "bg-purple-200" },
  { id: 12, title: "Języki Obce", icon: <GlobeAltIcon className="h-12 w-12 text-blue-600" />, color: "bg-blue-300" },
];

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  const handleClick = (subject) => {
    if (subject.title === "Fizyka") {
      // Przekierowuje bezpośrednio do strony fizyka/rozszerzony
      navigate('/fizyka/rozszerzony');
    } else {
      // Ustawia przedmiot i otwiera modal dla innych przedmiotów
      setSelectedSubject(subject);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSubject(null);
  };

  const handleLevelSelect = (level) => {
    if (selectedSubject) {
      const path = selectedSubject.title === "Matematyka"
        ? level === 'podstawowy'
          ? '/matematyka/podstawowy'
          : '/matematyka/rozszerzony'
        : '/'; // lub inna domyślna ścieżka, jeśli nie jest to matematyka

      navigate(path);
      handleCloseModal();
    }
  };

  // Lista słów do animacji
  const words = ["Matury", "Egzaminu", "Testu", "Sprawdzianu"];

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(255, 255, 255)"
      gradientBackgroundEnd="rgb(240, 240, 240)"
      firstColor="255, 255, 255"
      secondColor="200, 200, 255"
      thirdColor="150, 200, 255"
      fourthColor="200, 100, 100"
      fifthColor="180, 180, 180"
      pointerColor="120, 120, 255"
      size="70%"
      blendingValue="soft-light"
      interactive={true}
      containerClassName="relative min-h-screen bg-gray-100 text-gray-900 overflow-hidden"
    >

      
    {/* Nagłówek */}
    <header className="text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500 pb-6 leading-tight whitespace-nowrap">
          Przygotuj się do <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-500"><FlipWords words={words} duration={2500} /></span>
        </h1>
        <p className="text-gray-700 text-md sm:text-lg">
          Wybierz przedmiot i odkryj maturalne wyzwania w świeżym, nowoczesnym stylu
        </p>
      </div>
    </header>




      
      {/* Główna zawartość */}
      <main className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleClick(subject)}
              className={`cursor-pointer ${subject.color} bg-opacity-90 border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg flex flex-col items-center justify-center relative`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t from-${subject.color} to-white opacity-20 rounded-xl`}></div>
              <div className="relative z-10 mb-4 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm">
                {subject.icon}
              </div>
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">
                {subject.title}
              </h2>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full flex flex-col items-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              <span className="text-2xl font-bold">&times;</span>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
              Wybierz poziom
            </h2>
            <div className="flex flex-col w-full space-y-4">
              <button
                onClick={() => handleLevelSelect('podstawowy')}
                className="bg-white border-2 border-gradient-to-r from-teal-500 to-purple-500 rounded-lg p-4 text-lg font-semibold text-transparent bg-clip-text shadow-md hover:shadow-lg"
                style={{ backgroundImage: 'linear-gradient(to right, #38b2ac, #805ad5)' }}
              >
                PODSTAWOWY
              </button>
              <button
                onClick={() => handleLevelSelect('rozszerzony')}
                className="bg-white border-2 border-gradient-to-r from-teal-500 to-purple-500 rounded-lg p-4 text-lg font-semibold text-transparent bg-clip-text shadow-md hover:shadow-lg"
                style={{ backgroundImage: 'linear-gradient(to right, #38b2ac, #805ad5)' }}
              >
                ROZSZERZONY
              </button>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  );
}

export default HomePage;
