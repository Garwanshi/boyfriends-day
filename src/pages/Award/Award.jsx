import "./Award.css";

function Award({ onBack }) {
  return (
    <section className="award-page">

      <div className="award-background">
        <span className="bg-heart bg-heart-one">♡</span>
        <span className="bg-heart bg-heart-two">♡</span>
        <span className="bg-star bg-star-one">✦</span>
        <span className="bg-star bg-star-two">✧</span>
      </div>

      {/* GO BACK */}
      <button
        className="award-back-button"
        onClick={onBack}
      >
        ← go back
      </button>

      {/* EXACT CERTIFICATE IMAGE */}
      <div className="certificate-image-wrap">
        <img
          src="/images/award/certificate.png"
          alt="Certificate of Excellence for Mr. Kunal Jain"
          className="certificate-image"
        />
      </div>

    </section>
  );
}

export default Award;