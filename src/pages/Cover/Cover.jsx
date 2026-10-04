import "./Cover.css";

function Cover({ onOpenPhotos }) {
  return (
    <section className="new-cover">

      {/* =========================================
          DECORATIVE BACKGROUND
          ========================================= */}

      <div className="cover-star cover-star-1">✦</div>
      <div className="cover-star cover-star-2">✦</div>
      <div className="cover-star cover-star-3">✧</div>

      <div className="cover-heart cover-heart-1">♡</div>
      <div className="cover-heart cover-heart-2">♥</div>

      <div className="cover-sparkle sparkle-1">✦</div>
      <div className="cover-sparkle sparkle-2">✧</div>


      {/* =========================================
          TOP LITTLE LABEL
          ========================================= */}

      <div className="cover-top-note">
        made especially for you ♡
      </div>


      {/* =========================================
          MAIN CARD
          ========================================= */}

      <div className="cover-card">

        {/* decorative tape */}
        <div className="cover-tape"></div>


        {/* =========================================
            LEFT SIDE
            ========================================= */}

        <div className="cover-left">

          <span className="cover-small-text">
            A LITTLE SOMETHING FOR
          </span>

          <h1 className="cover-main-title">
            HAPPY
            <br />
            BOYFRIEND'S
            <br />
            DAY
          </h1>

          <div className="cover-title-heart">
            ♥
          </div>

          <p className="cover-message">
            because apparently
            <br />
            one message wasn't enough.
          </p>


          {/* =========================================
              CONTINUE BUTTON
              ========================================= */}

          <button
            className="cover-continue"
            onClick={onOpenPhotos}
          >
            <span>♡</span>
            CONTINUE
            <span>→</span>
          </button>

        </div>


        {/* =========================================
            RIGHT SIDE — PHOTO
            ========================================= */}

        <div className="cover-right">

          <div className="photo-frame">

            <div className="photo-inner">

              <img
                src="/images/cover/cover.jpg"
                alt="His photo"
              />

            </div>

          </div>


          {/* little handwritten notes */}

          <div className="cover-note note-one">
            yep.
            <br />
            it's you.
          </div>

          <div className="cover-note note-two">
            my favourite ♡
          </div>


          {/* camera doodle */}

          <div className="camera-doodle">

            <div className="camera-body">
              <div className="camera-lens"></div>
            </div>

            <div className="camera-flash"></div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM TEXT
          ========================================= */}

      <div className="cover-bottom-note">
        scroll? nah.
        <span>tap the button.</span>
      </div>

    </section>
  );
}

export default Cover;