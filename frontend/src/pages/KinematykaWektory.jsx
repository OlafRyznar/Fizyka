import React, { useState } from 'react';
import RowerzystaFizyka from '../assets/RowerzystaFizyka.png';
import PolicjaFizyka from '../assets/PolicjaFizyka.png';
import SzosyFizyka from '../assets/SzosyFizyka.png';
import WykresFizyka1 from '../assets/WykresFizyka1.png';

const KinematykaWektory = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Zadania z Kinematyki i Wektorów</h1>
        <p className="text-gray-600 mt-2">
          Tutaj znajdziesz zadania dotyczące kinematyki i wektorów. Wybierz zadanie z poniższej listy, aby zobaczyć szczegóły.
        </p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => handleImageClick(RowerzystaFizyka)}>
          <div className="relative">
            <img
              src={RowerzystaFizyka}
              alt="Rowerzysta Fizyka"
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Kliknij, aby zobaczyć zdjęcie</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Zadanie 1</h2>
            <p className="text-gray-600">Rok: 2024</p>
            <p className="text-gray-600">Rodzaj zadania: Otwarte</p>
            <p className="text-gray-600">Typ: Próbna</p>
            <p className="text-gray-600 mt-2">Opis: Rowerzysta - Przykładowy opis zadania.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => handleImageClick(PolicjaFizyka)}>
          <div className="relative">
            <img
              src={PolicjaFizyka}
              alt="Samochód Policyjny"
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Kliknij, aby zobaczyć zdjęcie</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Zadanie 2</h2>
            <p className="text-gray-600">Rok: 2023</p>
            <p className="text-gray-600">Rodzaj zadania: Otwarte</p>
            <p className="text-gray-600">Typ: Majowa</p>
            <p className="text-gray-600 mt-2">Opis: Samochód policyjny P jechał - Przykładowy opis zadania.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => handleImageClick(SzosyFizyka)}>
          <div className="relative">
            <img
              src={SzosyFizyka}
              alt="Dwie Prostoliniowe Szosy"
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Kliknij, aby zobaczyć zdjęcie</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Zadanie 3</h2>
            <p className="text-gray-600">Rok: 2023</p>
            <p className="text-gray-600">Rodzaj zadania: Otwarte</p>
            <p className="text-gray-600">Typ: Próbna</p>
            <p className="text-gray-600 mt-2">Opis: Dwie prostoliniowe szosy - Przykładowy opis zadania.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => handleImageClick(WykresFizyka1)}>
          <div className="relative">
            <img
              src={WykresFizyka1}
              alt="Wykres 1"
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Kliknij, aby zobaczyć zdjęcie</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Zadanie 4</h2>
            <p className="text-gray-600">Rok: 2022</p>
            <p className="text-gray-600">Rodzaj zadania: Otwarte</p>
            <p className="text-gray-600">Typ: Próbna</p>
            <p className="text-gray-600 mt-2">Opis: Na wykresie 1 przedstawiono - Przykładowy opis zadania.</p>
          </div>
        </div>

        {/* Dodaj więcej kafelków z zadaniami według potrzeb */}
      </main>
      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded"
            onClick={handleCloseImage}
          >
            X
          </button>
          <img src={currentImage} alt="Pełne zdjęcie" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default KinematykaWektory;
