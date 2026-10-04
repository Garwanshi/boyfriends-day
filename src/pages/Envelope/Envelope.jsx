import { useEffect, useRef, useState } from "react";
import "./Envelope.css";

const songs = [
  {
    id: 1,
    title: "Hona Tha Pyar",
    photo: "/images/songs/hona-tha-pyar.jpg",
    audio: "/music/hona tha pyar1.mp3",
  },
  {
    id: 2,
    title: "Jab Se Tere Naina",
    photo: "/images/songs/jab-se-tere-naina.jpg",
    audio: "/music/jab se tere naina.mp3",
  },
  {
    id: 3,
    title: "Offo",
    photo: "/images/songs/offo.jpg",
    audio: "/music/offo.mp3",
  },
  {
    id: 4,
    title: "Itna Pyaara",
    photo: "/images/songs/itna-pyara.jpg",
    audio: "/music/itna pyara.mp3",
  },
];

function Envelope({ onBack }) {
  const [isOpening, setIsOpening] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const openEnvelope = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      setShowMemories(true);
    }, 1800);
  };

  const handleSongClick = async (song) => {
    const audio = audioRef.current;

    if (!audio) return;

    /* =====================================================
       CLICKING THE SAME SONG
       → PAUSE / RESUME
       ===================================================== */

    if (selectedSong.id === song.id) {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Could not play song:", error);
          setIsPlaying(false);
        }
      } else {
        audio.pause();
        setIsPlaying(false);
      }

      return;
    }

    /* =====================================================
       CLICKING A DIFFERENT SONG
       → STOP OLD SONG
       → LOAD NEW SONG
       → PLAY NEW SONG
       ===================================================== */

    audio.pause();
    audio.currentTime = 0;

    audio.src = song.audio;

    setSelectedSong(song);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Could not play song:", error);
      setIsPlaying(false);
    }
  };

  /* =====================================================
     CLEAN UP AUDIO WHEN LEAVING THIS PAGE
     ===================================================== */

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  /* =====================================================
     SONG MEMORY PAGE
     ===================================================== */

  if (showMemories) {
    return (
      <section className="song-memory-room">

        {/* AUDIO PLAYER */}

        <audio
          ref={audioRef}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          style={{ display: "none" }}
        />


        {/* BACK BUTTON */}

        <button
          className="memory-back-button"
          onClick={onBack}
        >
          ← back
        </button>


        {/* HEADING */}

        <div className="memory-heading">
          <h1>songs that remind me of you</h1>
        </div>


        {/* SMALL DECORATIONS */}

        <div className="memory-doodle doodle-heart-one">
          ♡
        </div>

        <div className="memory-doodle doodle-heart-two">
          ♡
        </div>

        <div className="memory-doodle doodle-star-one">
          ✦
        </div>

        <div className="memory-doodle doodle-star-two">
          ✧
        </div>

        <div className="memory-doodle doodle-flower-one">
          ✿
        </div>

        <div className="memory-doodle doodle-flower-two">
          ✿
        </div>


        {/* =================================================
            VINYL VIEW
            ================================================= */}

        <div className="vinyl-view-area">

          {/* EVERYTHING INSIDE THIS ROTATES TOGETHER */}

          <div className="vinyl-rotation-stage">


            {/* =================================================
                VINYL
                ================================================= */}

            <div className="vinyl-record">

              <div className="vinyl-shine" />

              <div className="vinyl-groove groove-one" />
              <div className="vinyl-groove groove-two" />
              <div className="vinyl-groove groove-three" />
              <div className="vinyl-groove groove-four" />

              <div className="vinyl-label">

                <span className="label-small">
                  FOR YOU
                </span>

                <strong>
                  {selectedSong.title}
                </strong>

                <div className="record-center">
                  ♡
                </div>

              </div>

            </div>


            {/* =================================================
                POLAROID 1
                ================================================= */}

            <button
              className={`polaroid polaroid-one ${
                selectedSong.id === 1 ? "selected" : ""
              }`}
              onClick={() => handleSongClick(songs[0])}
              aria-label={
                selectedSong.id === 1 && isPlaying
                  ? `Pause ${songs[0].title}`
                  : `Play ${songs[0].title}`
              }
            >

              <div className="polaroid-tape" />

              <div className="polaroid-photo">

                <img
                  src={songs[0].photo}
                  alt={songs[0].title}
                />

              </div>

              <div className="polaroid-number">
                <span>
                  {songs[0].title}
                </span>

                <span>
                  ♡
                </span>
              </div>

            </button>


            {/* =================================================
                POLAROID 2
                ================================================= */}

            <button
              className={`polaroid polaroid-two ${
                selectedSong.id === 2 ? "selected" : ""
              }`}
              onClick={() => handleSongClick(songs[1])}
              aria-label={
                selectedSong.id === 2 && isPlaying
                  ? `Pause ${songs[1].title}`
                  : `Play ${songs[1].title}`
              }
            >

              <div className="polaroid-tape" />

              <div className="polaroid-photo">

                <img
                  src={songs[1].photo}
                  alt={songs[1].title}
                />

              </div>

              <div className="polaroid-number">
                <span>
                  {songs[1].title}
                </span>

                <span>
                  ♡
                </span>
              </div>

            </button>


            {/* =================================================
                POLAROID 3
                ================================================= */}

            <button
              className={`polaroid polaroid-three ${
                selectedSong.id === 3 ? "selected" : ""
              }`}
              onClick={() => handleSongClick(songs[2])}
              aria-label={
                selectedSong.id === 3 && isPlaying
                  ? `Pause ${songs[2].title}`
                  : `Play ${songs[2].title}`
              }
            >

              <div className="polaroid-tape" />

              <div className="polaroid-photo">

                <img
                  src={songs[2].photo}
                  alt={songs[2].title}
                />

              </div>

              <div className="polaroid-number">
                <span>
                  {songs[2].title}
                </span>

                <span>
                  ♡
                </span>
              </div>

            </button>


            {/* =================================================
                POLAROID 4
                ================================================= */}

            <button
              className={`polaroid polaroid-four ${
                selectedSong.id === 4 ? "selected" : ""
              }`}
              onClick={() => handleSongClick(songs[3])}
              aria-label={
                selectedSong.id === 4 && isPlaying
                  ? `Pause ${songs[3].title}`
                  : `Play ${songs[3].title}`
              }
            >

              <div className="polaroid-tape" />

              <div className="polaroid-photo">

                <img
                  src={songs[3].photo}
                  alt={songs[3].title}
                />

              </div>

              <div className="polaroid-number">
                <span>
                  {songs[3].title}
                </span>

                <span>
                  ♡
                </span>
              </div>

            </button>

          </div>
        </div>


        {/* BOTTOM LITTLE HEART */}

        <div className="music-line-decoration">
          ♡
        </div>

      </section>
    );
  }


  /* =====================================================
     ENVELOPE OPENING SCREEN
     ===================================================== */

  return (
    <section
      className={`envelope-opening-screen ${
        isOpening ? "opening" : ""
      }`}
    >

      <button
        className="envelope-back-button"
        onClick={onBack}
      >
        ← back
      </button>


      <div
        className="full-envelope-area"
        onClick={openEnvelope}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openEnvelope();
          }
        }}
      >

        <div className="full-envelope">

          <div className="full-envelope-back">
            <div className="paper-grain" />
          </div>


          <div className="inside-letter">

            <div className="letter-decoration">
              ♡
            </div>

            <div className="letter-lines">
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>


          <div className="full-envelope-flap">

            <div className="flap-paper" />

          </div>


          <div className="full-envelope-front">

            <div className="front-left" />

            <div className="front-right" />

            <div className="front-bottom" />

          </div>


          <div className="big-wax-seal">
            ♡
          </div>

        </div>


        {!isOpening && (
          <p className="tap-envelope">
            tap to open ♡
          </p>
        )}

      </div>


      <span className="opening-doodle opening-flower">
        ✿
      </span>

      <span className="opening-doodle opening-star-one">
        ✦
      </span>

      <span className="opening-doodle opening-star-two">
        ✧
      </span>

      <span className="opening-doodle opening-heart">
        ♡
      </span>

    </section>
  );
}

export default Envelope;