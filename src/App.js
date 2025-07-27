import { useState } from 'react';
import './App.css';
import data from './data/data.json';
import { HeroSection } from './sections/HeroSection';
import { TrendingNowSection } from './sections/TrandingNowSection';
import Sidebar from "./components/Sidebar"; // Adjust the path

function App() {
  const [activeMovie, setActiveMovie] = useState(data.Featured);


  return (
    <div className="bg-black w-full min-h-screen overscroll-x-none">
            <Sidebar />

     <HeroSection movie={activeMovie} />


      <div className="absolute bottom-5">
        <TrendingNowSection
          trendingData={data.TendingNow}
          onMovieClick={setActiveMovie}
        />
      </div>
    </div>
  );
}

export default App;
