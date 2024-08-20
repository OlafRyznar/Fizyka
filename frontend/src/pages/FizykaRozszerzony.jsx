import React from 'react';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';
import { FaAtom, FaThermometerHalf, FaWaveSquare, FaMagnet, FaBolt } from 'react-icons/fa'; // Przykładowe ikony

// Komponent dla pojedynczego kafelka z ikoną
const Tile = ({ title, icon: Icon, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
    <a href={link}>
      <div className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Icon className="text-4xl text-teal-500" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>
      </div>
    </a>
  </div>
);

const FizykaRozszerzona = () => {
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
            Fizyka - Poziom Rozszerzony
          </h1>
          <p className="text-gray-700 text-md sm:text-lg">
            Tutaj znajdziesz materiały do poziomu rozszerzonego z fizyki.
          </p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10 overflow-auto">
        {/* Ustaw overflow-auto na main, aby umożliwić przewijanie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Tile 
            title="Kinematyka, wektory"
            icon={FaBolt}
            link="/kinematyka-wektory"
          />
          <Tile 
            title="Dynamika - siły, praca moc energia"
            icon={FaMagnet}
            link="/dynamika"
          />
          <Tile 
            title="Rzuty w polu grawitacyjnym"
            icon={FaWaveSquare}
            link="/rzuty-w-polu-grawitacyjnym"
          />
          <Tile 
            title="Pęd. Zasada zachowania pędu"
            icon={FaAtom}
            link="/ped-zasada-zachowania-pedu"
          />
          <Tile 
            title="Ruch jednostajny po okręgu"
            icon={FaAtom}
            link="/ruch-jednostajny-po-okregu"
          />
          <Tile 
            title="Ruch obrotowy bryły sztywnej, moment siły"
            icon={FaBolt}
            link="/ruch-obrotowy-bryly-sztywnej"
          />
          <Tile 
            title="Pole grawitacyjne"
            icon={FaMagnet}
            link="/pole-grawitacyjne"
          />
          <Tile 
            title="Hydrostatyka (także prawo Archimedesa w gazach)"
            icon={FaWaveSquare}
            link="/hydrostatyka"
          />
          <Tile 
            title="Gazy"
            icon={FaThermometerHalf}
            link="/gazy"
          />
          <Tile 
            title="Termodynamika"
            icon={FaThermometerHalf}
            link="/termodynamika"
          />
          <Tile 
            title="Elektrostatyka"
            icon={FaBolt}
            link="/elektrostatyka"
          />
          <Tile 
            title="Prąd stały"
            icon={FaBolt}
            link="/prad-staly"
          />
          <Tile 
            title="Magnetyzm"
            icon={FaMagnet}
            link="/magnetyzm"
          />
          <Tile 
            title="Indukcja elektromagnetyczna"
            icon={FaBolt}
            link="/indukcja-elektromagnetyczna"
          />
          <Tile 
            title="Prąd zmienny"
            icon={FaBolt}
            link="/prad-zmienny"
          />
          <Tile 
            title="Drgania. Sprężystość ciał"
            icon={FaWaveSquare}
            link="/drgania-sprezystosc"
          />
          <Tile 
            title="Fale mechaniczne"
            icon={FaWaveSquare}
            link="/fale-mechaniczne"
          />
          <Tile 
            title="Akustyka"
            icon={FaWaveSquare}
            link="/akustyka"
          />
          <Tile 
            title="Optyka geometryczna"
            icon={FaWaveSquare}
            link="/optyka-geometryczna"
          />
          <Tile 
            title="Optyka fizyczna. Fale elektromagnetyczne"
            icon={FaWaveSquare}
            link="/optyka-fizyczna"
          />
          <Tile 
            title="Atom wodoru"
            icon={FaAtom}
            link="/atom-wodoru"
          />
          <Tile 
            title="Zjawisko fotoelektryczne. Dualizm korp. - falowy"
            icon={FaAtom}
            link="/zjawisko-fotoelektryczne"
          />
          <Tile 
            title="Fizyka jądrowa"
            icon={FaAtom}
            link="/fizyka-jadrowa"
          />
          <Tile 
            title="Teoria względności"
            icon={FaAtom}
            link="/teoria-wzglednosci"
          />
          <Tile 
            title="Astronomia"
            icon={FaAtom}
            link="/astronomia"
          />
          <Tile 
            title="Inne"
            icon={FaAtom}
            link="/inne"
          />
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
};

export default FizykaRozszerzona;
