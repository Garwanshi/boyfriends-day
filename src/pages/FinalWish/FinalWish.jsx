import "./FinalWish.css"; 
 
function GoldenSparkle({ className = "" }) { 
  return ( 
    <span className={`golden-sparkle ${className}`} aria-hidden="true"> 
      ✦ 
    </span> 
  ); 
} 
 
function HeartSticker({ className = "" }) { 
  return ( 
    <div className={`heart-sticker ${className}`} aria-hidden="true"> 
      <span>♡</span> 
      <span>♥</span> 
      <span>♡</span> 
    </div> 
  ); 
} 
 
function FlowerSticker({ className = "" }) { 
  return ( 
    <div className={`flower-sticker ${className}`} aria-hidden="true"> 
      <span className="flower-head">🌷</span> 
      <span className="flower-stem"></span> 
      <span className="flower-leaf flower-leaf-left"></span> 
      <span className="flower-leaf flower-leaf-right"></span> 
    </div> 
  ); 
} 
 
function TapeSticker({ className = "" }) { 
  return ( 
    <div className={`tape-sticker ${className}`} aria-hidden="true"> 
      <span></span> 
      <span></span> 
      <span></span> 
    </div> 
  ); 
} 
 
function FinalWish({ onBack }) { 
  return ( 
    <main className="final-wish-page"> 
 
      {/* ========================================= 
          STATIC BACKGROUND 
          ========================================= */} 
 
      <div 
        className="final-wish-background" 
        aria-hidden="true" 
      /> 
 
 
      {/* ========================================= 
          BACK BUTTON 
          ========================================= */} 
 
      <button 
        className="final-wish-back" 
        onClick={onBack} 
        type="button" 
      > 
        ← back 
      </button> 
 
 
      {/* ========================================= 
          LEFT SIDE DECORATIONS 
          ========================================= */} 
 
      <TapeSticker className="tape-left-top" /> 
 
      <HeartSticker className="sticker-left-hearts" /> 
 
      <GoldenSparkle className="sparkle-left-one" /> 
      <GoldenSparkle className="sparkle-left-two" /> 
 
      <div className="left-mini-note"> 
        Smile suits you... 
      </div> 
 
      <div className="left-mini-note lucky-note"> 
        lucky you. ♡ 
      </div> 
 
 
      {/* ========================================= 
          TOP DECORATIONS 
          ========================================= */} 
 
      <div className="top-note"> 
        this one's just for you. 
      </div> 
 
      <GoldenSparkle className="sparkle-top-one" /> 
 
      <TapeSticker className="tape-top-right" /> 
 
      <div className="top-right-note"> 
        you're my favourite 
        <br /> 
        person. ♡ 
      </div> 
 
      <HeartSticker className="sticker-top-right-hearts" /> 
 
 
      {/* ========================================= 
          MAIN CONTENT 
          ========================================= */} 
 
      <section className="final-wish-content"> 
 
        <p className="final-wish-eyebrow"> 
          just one last thing... 
        </p> 
 
        <h1 className="final-wish-title"> 
          I Loveeeee Youuu 
          <br /> 
          Soooo Munchhhh 
        </h1> 
 
        <div className="title-divider"> 
          <span>♡</span> 
          <i></i> 
          <span>♡</span> 
          <i></i> 
          <span>♡</span> 
        </div> 
 
        <GoldenSparkle className="sparkle-main-one" /> 
        <GoldenSparkle className="sparkle-main-two" /> 
        <GoldenSparkle className="sparkle-main-three" /> 
 
      </section> 
 
 
      {/* ========================================= 
          RIGHT SIDE NOTES 
          ========================================= */} 
 
      <div className="right-note right-note-one"> 
        You’re stuck with me... 
        <br /> 
        hehe ♡ 
      </div> 
 
      <div className="right-note right-note-two"> 
        you are my 
        <br /> 
        shining star. 
        <span>✦</span> 
      </div> 
 
      <div className="right-note right-note-three"> 
        I’m really glad 
        <br /> 
        I found you. 
      </div> 
 
 
      {/* ========================================= 
          RIGHT SIDE DECORATIONS 
          ========================================= */} 
 
      <HeartSticker className="sticker-right-hearts" /> 
 
      <GoldenSparkle className="sparkle-right-one" /> 
      <GoldenSparkle className="sparkle-right-two" /> 
 
      <FlowerSticker className="flower-right" /> 
 
 
      {/* ========================================= 
          BOTTOM DECORATIONS 
          ========================================= */} 
 
      <TapeSticker className="tape-bottom" /> 
 
      <HeartSticker className="sticker-bottom-hearts" /> 
 
      <GoldenSparkle className="sparkle-bottom-one" /> 
 
      <p className="bottom-signature"> 
        made with a little bit of love ♡ 
      </p> 
 
    </main> 
  ); 
} 
 
export default FinalWish;