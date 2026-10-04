import "./Photos.css";

const photos = [
  { id: 1, src: "/images/photos/01.jpg", className: "photo-1" },
  { id: 2, src: "/images/photos/02.jpg", className: "photo-2" },
  { id: 3, src: "/images/photos/03.jpg", className: "photo-3" },
  { id: 4, src: "/images/photos/04.jpg", className: "photo-4" },
  { id: 5, src: "/images/photos/05.jpg", className: "photo-5" },
  { id: 6, src: "/images/photos/06.jpg", className: "photo-6" },
  { id: 7, src: "/images/photos/07.jpg", className: "photo-7" },
  { id: 8, src: "/images/photos/08.jpg", className: "photo-8" },
  { id: 9, src: "/images/photos/09.jpg", className: "photo-9" },
  { id: 10, src: "/images/photos/10.jpg", className: "photo-10" },
  { id: 11, src: "/images/photos/11.jpg", className: "photo-11" },
  { id: 12, src: "/images/photos/12.jpg", className: "photo-12" },
  { id: 13, src: "/images/photos/13.jpg", className: "photo-13" },
  { id: 14, src: "/images/photos/14.jpg", className: "photo-14" },
  { id: 15, src: "/images/photos/15.jpg", className: "photo-15" },
];

function HeartDoodle({ className = "" }) {
  return (
    <svg
      className={`heart-doodle ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="M50 82 C43 74 15 58 15 35 C15 19 34 13 50 30 C66 13 85 19 85 35 C85 58 57 74 50 82Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ className = "" }) {
  return (
    <svg
      className={`sparkle-doodle ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="M50 5 L56 43 L95 50 L56 57 L50 95 L44 57 L5 50 L44 43 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Tulip({ className = "" }) {
  return (
    <svg
      className={`tulip-doodle ${className}`}
      viewBox="0 0 100 130"
      aria-hidden="true"
    >
      <path
        d="M35 38 C28 18 42 10 50 30 C58 10 72 18 65 38 C62 52 56 60 50 63 C44 60 38 52 35 38Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 61 C50 83 50 101 43 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M47 84 C35 76 25 78 19 86"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 96 C59 88 69 90 76 97"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaperClip({ className = "" }) {
  return (
    <svg
      className={`paperclip-doodle ${className}`}
      viewBox="0 0 70 100"
      aria-hidden="true"
    >
      <path
        d="
          M48 18
          C62 32 59 51 48 64
          L28 86
          C18 97 3 89 8 77
          L34 43
          C42 33 51 40 45 49
          L24 76
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WashiTape({ className = "" }) {
  return (
    <span
      className={`washi-tape ${className}`}
      aria-hidden="true"
    />
  );
}

function Photos({ onBack }) {
  return (
    <main className="photos-page">
      <button
        className="photos-back-button"
        onClick={onBack}
        type="button"
        aria-label="Go back to surprises"
      >
        ← back
      </button>

      <WashiTape className="washi-top-left" />
      <WashiTape className="washi-bottom-right" />

      <PaperClip className="paperclip-top" />

      <HeartDoodle className="heart-top" />
      <HeartDoodle className="heart-right" />

      <Sparkle className="sparkle-top" />
      <Sparkle className="sparkle-bottom" />

      <Tulip className="tulip-left" />
      <Tulip className="tulip-right" />

      <section className="photos-collage-section">
        <div className="photo-grid">
          {photos.map((photo) => (
            <div
              className={`grid-photo ${photo.className}`}
              key={photo.id}
            >
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                loading={photo.id <= 8 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Photos;