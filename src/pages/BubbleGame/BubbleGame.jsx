import { useState } from "react";

import "./BubbleGame.css";


function BubbleGame({ onBack, onNext }) {

  const [poppedBubbles, setPoppedBubbles] = useState([]);

  const [activeMessages, setActiveMessages] = useState([]);

  const [showFinalLove, setShowFinalLove] = useState(false);


  const bubbles = [
    {
      id: 1,
      message: "Popped! Just like my heart when I see you.💗",
      shape: "heart-bubble",
      color: "pink",
      position: "bubble-one"
    },
    {
      id: 2,
      message: "You’re my safest place. 🏡",
      shape: "cloud-bubble",
      color: "blue",
      position: "bubble-two"
    },
    {
      id: 3,
      message: "Everything feels better when I have you beside me.🫂",
      shape: "flower-bubble",
      color: "yellow",
      position: "bubble-three"
    },
    {
      id: 4,
      message: "My very own cute little Spiderman. 🕷️♡",
      shape: "star-bubble",
      color: "lavender",
      position: "bubble-four"
    },
    {
      id: 5,
      message: "I need you in all my tomorrows.💖",
      shape: "blob-bubble",
      color: "mint",
      position: "bubble-five"
    },
    {
      id: 6,
      message: "I lovee being loved by you.🥹",
      shape: "round-bubble",
      color: "peach",
      position: "bubble-six"
    }
  ];


  const finalHeartBubbles = Array.from(
    { length: 70 },
    (_, index) => index + 1
  );


  const popBubble = (bubble) => {

    if (poppedBubbles.includes(bubble.id)) {
      return;
    }


    const bubbleElement =
      document.querySelector(
        `[data-bubble-id="${bubble.id}"]`
      );


    if (!bubbleElement) {
      return;
    }


    const area =
      bubbleElement.parentElement.getBoundingClientRect();

    const bubbleRect =
      bubbleElement.getBoundingClientRect();


    const x =
      bubbleRect.left -
      area.left +
      bubbleRect.width / 2;


    const y =
      bubbleRect.top -
      area.top +
      bubbleRect.height / 2;


    const isLastBubble =
      poppedBubbles.length === bubbles.length - 1;


    setPoppedBubbles((previous) => [
      ...previous,
      bubble.id
    ]);


    const effectId =
      `${bubble.id}-${Date.now()}`;


    setActiveMessages((previous) => [
      ...previous,
      {
        id: effectId,
        message: bubble.message,
        x,
        y
      }
    ]);


    if (isLastBubble) {

      setTimeout(() => {
        setShowFinalLove(true);
      }, 250);

    }


    setTimeout(() => {

      setActiveMessages((previous) =>
        previous.filter(
          (item) => item.id !== effectId
        )
      );

    }, 5000);
  };


  return (
    <main className="bubble-game-page">


      {/* =================================================
          BACKGROUND SPARKLES
      ================================================= */}

      <span className="background-sparkle background-sparkle-one">
        ✦
      </span>

      <span className="background-sparkle background-sparkle-two">
        ✧
      </span>

      <span className="background-sparkle background-sparkle-three">
        ✦
      </span>

      <span className="background-sparkle background-sparkle-four">
        ✧
      </span>

      <span className="background-sparkle background-sparkle-five">
        ✦
      </span>

      <span className="background-sparkle background-sparkle-six">
        ✧
      </span>

      <span className="background-sparkle background-sparkle-seven">
        ✦
      </span>

      <span className="background-sparkle background-sparkle-eight">
        ✧
      </span>


      {/* =================================================
          FINAL LOVE HEART BUBBLE SHOWER
      ================================================= */}

      {showFinalLove && (
        <div className="final-love-shower">

          {finalHeartBubbles.map((heart) => (

            <span
              key={heart}
              className={`final-heart final-heart-${heart}`}
            >
              ♥
            </span>

          ))}


          {/* =============================================
              FINAL MESSAGE
          ============================================= */}

          <div className="final-love-message">
            I Love you😚
          </div>

        </div>
      )}


      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <button
        className="bubble-back-button"
        onClick={onBack}
      >
        ← go back
      </button>


      {/* =================================================
          MAIN PAPER
      ================================================= */}

      <section className="bubble-game-paper">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="bubble-game-label">
          ✦ something fun for you ✦
        </div>


        <h1 className="bubble-game-heading">
          POP
          <span>THE BUBBLES!</span>
        </h1>


        <p className="bubble-game-subtitle">
          each one is hiding a tiny surprise...
        </p>


        {/* =================================================
            GAME AREA
        ================================================= */}

        <div className="bubble-area">


          {/* =================================================
              BUBBLES
          ================================================= */}

          {bubbles.map((bubble) => {

            const isPopped =
              poppedBubbles.includes(
                bubble.id
              );


            return (

              <button
                key={bubble.id}

                data-bubble-id={bubble.id}

                className={`
                  game-bubble
                  ${bubble.shape}
                  ${bubble.color}
                  ${bubble.position}
                  ${isPopped ? "bubble-popped" : ""}
                `}

                onClick={() =>
                  popBubble(bubble)
                }

                aria-label="Pop bubble"

                disabled={isPopped}
              >

                {!isPopped && (
                  <>

                    {/* big shine */}

                    <span className="bubble-shine"></span>


                    {/* small shine */}

                    <span className="bubble-small-shine"></span>


                    {/* decorative dots */}

                    <span className="bubble-dot dot-one"></span>

                    <span className="bubble-dot dot-two"></span>


                    {/* bubble symbol */}

                    <span className="bubble-symbol">

                      {bubble.shape === "heart-bubble" &&
                        "♡"}

                      {bubble.shape === "cloud-bubble" &&
                        "☁"}

                      {bubble.shape === "flower-bubble" &&
                        "✿"}

                      {bubble.shape === "star-bubble" &&
                        "★"}

                      {bubble.shape === "blob-bubble" &&
                        "✦"}

                      {bubble.shape === "round-bubble" &&
                        "♡"}

                    </span>

                  </>
                )}

              </button>

            );

          })}


          {/* =================================================
              POP EFFECTS + MESSAGE
          ================================================= */}

          {activeMessages.map((effect) => (

            <div
              key={effect.id}
              className="pop-explosion"
              style={{
                left: `${effect.x}px`,
                top: `${effect.y}px`
              }}
            >


              {/* =========================================
                  PARTY POPPER
              ========================================= */}

              <div className="party-popper">

                <div className="popper-body">
                  🎉
                </div>

              </div>


              {/* =========================================
                  CONFETTI
              ========================================= */}

              <div className="confetti confetti-one"></div>

              <div className="confetti confetti-two"></div>

              <div className="confetti confetti-three"></div>

              <div className="confetti confetti-four"></div>

              <div className="confetti confetti-five"></div>

              <div className="confetti confetti-six"></div>


              {/* =========================================
                  RED HEART SHOWER
              ========================================= */}

              <span className="shower-heart heart-one">
                ♥
              </span>

              <span className="shower-heart heart-two">
                ♥
              </span>

              <span className="shower-heart heart-three">
                ♥
              </span>

              <span className="shower-heart heart-four">
                ♥
              </span>

              <span className="shower-heart heart-five">
                ♥
              </span>

              <span className="shower-heart heart-six">
                ♥
              </span>


              {/* =========================================
                  SPARKLES
              ========================================= */}

              <span className="burst-sparkle sparkle-one">
                ✦
              </span>

              <span className="burst-sparkle sparkle-two">
                ✧
              </span>

              <span className="burst-sparkle sparkle-three">
                ✦
              </span>

              <span className="burst-sparkle sparkle-four">
                ✧
              </span>

              <span className="burst-sparkle sparkle-five">
                ✦
              </span>


              {/* =========================================
                  MESSAGE
              ========================================= */}

              <div className="popped-message">

                <span className="message-heart">
                  ♥
                </span>

                <span>
                  {effect.message}
                </span>

                <span className="message-heart">
                  ♥
                </span>

              </div>

            </div>

          ))}


          {/* =================================================
              BACKGROUND DOODLES
          ================================================= */}

          <span className="floating-doodle doodle-one">
            ✦
          </span>

          <span className="floating-doodle doodle-two">
            ♡
          </span>

          <span className="floating-doodle doodle-three">
            ✧
          </span>

          <span className="floating-doodle doodle-four">
            ♡
          </span>

        </div>


        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="bubble-progress">

          <span>
            {poppedBubbles.length}
          </span>

          <div className="progress-line">

            <div
              className="progress-fill"
              style={{
                width:
                  `${(poppedBubbles.length / bubbles.length) * 100}%`
              }}
            ></div>

          </div>

          <span>
            {bubbles.length}
          </span>

        </div>


        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <p className="bubble-bottom-note">
          pop them all • collect the love ♡
        </p>

      </section>

    </main>
  );
}


export default BubbleGame;