import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Music could not be played:", error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.25;
    audio.playbackRate = 0.60;

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/hona-tha-pyaar.mp3"
        preload="auto"
      />

      <button
        className={`music-player ${
          isPlaying ? "music-player--playing" : ""
        }`}
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Turn music off" : "Turn music on"
        }
        aria-pressed={isPlaying}
      >
        <span className="music-symbol">
          {isPlaying ? "♥" : "♪"}
        </span>
      </button>
    </>
  );
}

export default MusicPlayer;