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

const MatematykaPodstawowy = () => {
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
            Matematyka - Poziom Podstawowy
          </h1>
          <p className="text-gray-700 text-md sm:text-lg">
            Tutaj znajdziesz materiały do poziomu podstawowego.
          </p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Tile 
            title="Liczby Rzeczywiste"
            description="Dowiedz się więcej o liczbach rzeczywistych, logarytmach i potęgach."
            link="/liczby-rzeczywiste"
          />
          <Tile 
            title="Wyrażenia Algebraiczne"
            description="Przestudiuj wyrażenia algebraiczne, równania i nierówności."
            link="/wyrazenia-algebraiczne"
          />
          <Tile 
            title="Funkcje"
            description="Zrozum różne rodzaje funkcji, ich wykresy i właściwości."
            link="/funkcje"
          />
          <Tile 
            title="Ciągi"
            description="Poznaj ciągi arytmetyczne i geometryczne oraz ich właściwości."
            link="/ciagi"
          />
          <Tile 
            title="Trygonometria"
            description="Zbadaj funkcje trygonometryczne i ich zastosowania."
            link="/trygonometria"
          />
          <Tile 
            title="Planimetria"
            description="Przestudiuj geometrie płaską i własności czworokątów."
            link="/planimetria"
          />
          <Tile 
            title="Geometria Analityczna"
            description="Analizuj geometrię analityczną, wektory i proste."
            link="/geometria-analityczna"
          />
          <Tile 
            title="Stereometria"
            description="Dowiedz się o bryłach i ich właściwościach."
            link="/stereometria"
          />
          <Tile 
            title="Kombinatoryka i Prawdopodobieństwo"
            description="Obliczaj prawdopodobieństwo i ucz się kombinatoryki."
            link="/kombinatoryka-prawdopodobienstwo"
          />
          <Tile 
            title="Optymalizacja i Rachunek Różniczkowy"
            description="Zrozumienie optymalizacji i pochodnych funkcji."
            link="/optymalizacja-rachunek-rozniczkowy"
          />
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
};

export default MatematykaPodstawowy;
