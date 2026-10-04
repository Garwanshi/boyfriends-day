import { useState } from "react";

import Cover from "./pages/Cover/Cover";
import Surprises from "./pages/Surprises/Surprises";
import Photos from "./pages/Photos/Photos";
import BubbleGame from "./pages/BubbleGame/BubbleGame";
import Award from "./pages/Award/Award";
import Envelope from "./pages/Envelope/Envelope";
import FinalWish from "./pages/FinalWish/FinalWish";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [currentPage, setCurrentPage] = useState("cover");

  return (
    <div className="app">
      {currentPage === "cover" && (
        <Cover
          onOpenPhotos={() => setCurrentPage("surprises")}
        />
      )}

      {currentPage === "surprises" && (
        <Surprises
          onBack={() => setCurrentPage("cover")}
          onOpenPhotos={() => setCurrentPage("photos")}
          onOpenBubbleGame={() => setCurrentPage("bubbleGame")}
          onOpenAward={() => setCurrentPage("award")}
          onOpenEnvelope={() => setCurrentPage("envelope")}
          onFinish={() => setCurrentPage("finalWish")}
        />
      )}

      {currentPage === "photos" && (
        <Photos
          onBack={() => setCurrentPage("surprises")}
        />
      )}

      {currentPage === "bubbleGame" && (
        <BubbleGame
          onBack={() => setCurrentPage("surprises")}
        />
      )}

      {currentPage === "award" && (
        <Award
          onBack={() => setCurrentPage("surprises")}
        />
      )}

      {currentPage === "envelope" && (
        <Envelope
          onBack={() => setCurrentPage("surprises")}
        />
      )}

      {currentPage === "finalWish" && (
        <FinalWish
          onBack={() => setCurrentPage("surprises")}
        />
      )}

      <MusicPlayer />
    </div>
  );
}

export default App;