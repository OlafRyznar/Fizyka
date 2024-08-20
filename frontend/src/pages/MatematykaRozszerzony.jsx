import React from 'react';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';

// Komponent dla pojedynczego kafelka z ładniejszym stylem
const Tile = ({ title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
    <a href={link}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  </div>
);

const MatematykaRozszerzony = () => {
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
      <header className="text-center py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500 mb-6 leading-tight">
            Matematyka - Poziom Rozszerzony
          </h1>
          <p className="text-gray-700 text-md sm:text-lg">
            Tutaj znajdziesz materiały do poziomu rozszerzonego.
          </p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Tile 
            title="Liczby Rzeczywiste"
            description="Zaawansowane tematy związane z liczbami rzeczywistymi, w tym bardziej złożone operacje i ich zastosowania."
            link="/liczby-rzeczywiste"
          />
          <Tile 
            title="Wyrażenia Algebraiczne"
            description="Głębsze badanie wyrażeń algebraicznych, funkcji, równań i ich zastosowań w matematyce rozszerzonej."
            link="/wyrazenia-algebraiczne"
          />
          <Tile 
            title="Funkcje"
            description="Rozszerzone tematy dotyczące funkcji, w tym funkcji trygonometrycznych, wykładniczych i logarytmicznych."
            link="/funkcje"
          />
          <Tile 
            title="Ciągi i Szeregi"
            description="Analiza ciągów arytmetycznych i geometrycznych oraz badanie ich szeregów."
            link="/ciagi-i-szeregi"
          />
          <Tile 
            title="Trygonometria"
            description="Zaawansowane zagadnienia z trygonometria, w tym funkcje trygonometryczne i ich zastosowania w różnych dziedzinach."
            link="/trygonometria"
          />
          <Tile 
            title="Planimetria"
            description="Zaawansowane zagadnienia planimetrii, w tym właściwości figur płaskich i twierdzenia."
            link="/planimetria"
          />
          <Tile 
            title="Geometria Analityczna"
            description="Analiza geometrii analitycznej w przestrzeni oraz metody rozwiązywania równań geometrycznych."
            link="/geometria-analityczna"
          />
          <Tile 
            title="Stereometria"
            description="Głębsze zrozumienie stereometrii, w tym właściwości brył przestrzennych i ich zastosowań."
            link="/stereometria"
          />
          <Tile 
            title="Kombinatoryka i Prawdopodobieństwo"
            description="Zaawansowane techniki kombinatoryki i analizy prawdopodobieństwa w kontekście problemów matematycznych."
            link="/kombinatoryka-prawdopodobienstwo"
          />
          <Tile 
            title="Rachunek Różniczkowy i Całkowy"
            description="Głębsze badanie rachunku różniczkowego i całkowego, w tym metody rozwiązywania problemów optymalizacyjnych."
            link="/rachunek-rozniczkowy-i-calkowy"
          />
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
};

export default MatematykaRozszerzony;
