import "./Surprises.css";

function CameraSticker() {
  return (
    <svg
      viewBox="0 0 300 240"
      className="object-svg"
      aria-hidden="true"
    >
      {/* shadow */}
      <rect
        x="45"
        y="75"
        width="210"
        height="125"
        rx="28"
        fill="#183b59"
        opacity="0.18"
        transform="translate(8 9)"
      />

      {/* camera body */}
      <rect
        x="45"
        y="65"
        width="210"
        height="125"
        rx="28"
        fill="#fffaf0"
        stroke="#173b56"
        strokeWidth="7"
      />

      {/* camera top */}
      <path
        d="M88 65 L105 38 H165 L183 65"
        fill="#d9e8ed"
        stroke="#173b56"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      {/* lens outer */}
      <circle
        cx="150"
        cy="127"
        r="43"
        fill="#ead9c2"
        stroke="#173b56"
        strokeWidth="7"
      />

      {/* lens */}
      <circle
        cx="150"
        cy="127"
        r="27"
        fill="#3d6f93"
        stroke="#173b56"
        strokeWidth="6"
      />

      <circle
        cx="158"
        cy="118"
        r="8"
        fill="#fffaf0"
        opacity="0.9"
      />

      {/* shutter */}
      <circle
        cx="211"
        cy="88"
        r="10"
        fill="#e8a7b9"
        stroke="#173b56"
        strokeWidth="5"
      />

      {/* little doodle */}
      <path
        d="M63 99 Q53 105 57 118"
        fill="none"
        stroke="#3d6f93"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsoleSticker() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="object-svg"
      aria-hidden="true"
    >
      {/* shadow */}
      <path
        d="M58 90 Q72 60 108 66 H212 Q248 60 262 90 L278 157 Q283 182 260 188 Q238 193 220 165 L207 145 H113 L100 165 Q82 193 60 188 Q37 182 42 157 Z"
        fill="#183b59"
        opacity="0.18"
        transform="translate(7 8)"
      />

      {/* console */}
      <path
        d="M58 83 Q72 53 108 59 H212 Q248 53 262 83 L278 150 Q283 175 260 181 Q238 186 220 158 L207 138 H113 L100 158 Q82 186 60 181 Q37 175 42 150 Z"
        fill="#fffaf0"
        stroke="#173b56"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      {/* d-pad */}
      <path
        d="M79 108 H106 M92 95 V121"
        stroke="#3d6f93"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* buttons */}
      <circle
        cx="220"
        cy="100"
        r="10"
        fill="#e8a7b9"
        stroke="#173b56"
        strokeWidth="5"
      />

      <circle
        cx="244"
        cy="119"
        r="10"
        fill="#d9e8ed"
        stroke="#173b56"
        strokeWidth="5"
      />

      <circle
        cx="198"
        cy="126"
        r="6"
        fill="#173b56"
      />

      <circle
        cx="225"
        cy="143"
        r="6"
        fill="#173b56"
      />

      {/* center detail */}
      <path
        d="M133 83 Q160 70 187 83"
        fill="none"
        stroke="#3d6f93"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EnvelopeSticker() {
  return (
    <svg
      viewBox="0 0 310 240"
      className="object-svg"
      aria-hidden="true"
    >
      {/* shadow */}
      <rect
        x="42"
        y="70"
        width="225"
        height="135"
        rx="10"
        fill="#183b59"
        opacity="0.18"
        transform="translate(8 9)"
      />

      {/* envelope */}
      <rect
        x="42"
        y="60"
        width="225"
        height="135"
        rx="10"
        fill="#fffaf0"
        stroke="#173b56"
        strokeWidth="7"
      />

      {/* inside blue */}
      <path
        d="M48 67 L154 145 L261 67"
        fill="#d9e8ed"
        stroke="#173b56"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      {/* bottom folds */}
      <path
        d="M48 188 L120 123"
        fill="none"
        stroke="#173b56"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M261 188 L189 123"
        fill="none"
        stroke="#173b56"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* heart seal */}
      <path
        d="M154 47
           C143 29 111 37 116 59
           C120 76 154 94 154 94
           C154 94 188 76 192 59
           C197 37 165 29 154 47 Z"
        fill="#e8a7b9"
        stroke="#173b56"
        strokeWidth="6"
      />
    </svg>
  );
}

/* =====================================================
   BOUQUET STICKER
   Small dusty-pink gerbera bouquet
   Blue wrapping paper
===================================================== */

function BouquetSticker() {
  return (
    <svg
      viewBox="0 0 320 360"
      className="object-svg bouquet-svg"
      aria-hidden="true"
    >
      {/* SOFT STICKER SHADOW */}
      <path
        d="
          M54 170
          Q70 120 105 85
          Q135 48 160 50
          Q190 48 220 85
          Q252 120 268 170
          L215 300
          L160 334
          L105 300
          Z
        "
        fill="#183b59"
        opacity="0.15"
        transform="translate(7 8)"
      />

      {/* DELICATE BACK BRANCHES */}
      <path
        d="M160 238 C135 180 104 120 72 76"
        fill="none"
        stroke="#667b61"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M160 238 C184 180 215 120 248 76"
        fill="none"
        stroke="#667b61"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M151 220 C116 172 86 151 58 138"
        fill="none"
        stroke="#667b61"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M169 220 C204 172 234 151 262 138"
        fill="none"
        stroke="#667b61"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* THIN BRANCH TWIGS */}
      <path
        d="M92 158 Q75 132 70 108"
        fill="none"
        stroke="#7b8065"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M101 139 Q110 112 116 91"
        fill="none"
        stroke="#7b8065"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M228 158 Q245 132 250 108"
        fill="none"
        stroke="#7b8065"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M219 139 Q210 112 204 91"
        fill="none"
        stroke="#7b8065"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* SMALL GREEN LEAVES */}
      <path
        d="
          M91 132
          Q70 120 65 101
          Q87 106 101 121
          Z
        "
        fill="#819875"
        stroke="#173b56"
        strokeWidth="3"
      />

      <path
        d="
          M111 116
          Q95 98 99 80
          Q116 90 121 106
          Z
        "
        fill="#9caf8b"
        stroke="#173b56"
        strokeWidth="3"
      />

      <path
        d="
          M229 132
          Q250 120 255 101
          Q233 106 219 121
          Z
        "
        fill="#819875"
        stroke="#173b56"
        strokeWidth="3"
      />

      <path
        d="
          M209 116
          Q225 98 221 80
          Q204 90 199 106
          Z
        "
        fill="#9caf8b"
        stroke="#173b56"
        strokeWidth="3"
      />

      <path
        d="
          M117 186
          Q94 174 88 153
          Q111 158 127 176
          Z
        "
        fill="#76916d"
        stroke="#173b56"
        strokeWidth="3"
      />

      <path
        d="
          M203 186
          Q226 174 232 153
          Q209 158 193 176
          Z
        "
        fill="#76916d"
        stroke="#173b56"
        strokeWidth="3"
      />

      {/* BABY'S BREATH */}
      <path
        d="M82 181 C84 150 92 125 105 103"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      <path
        d="M92 161 C77 150 68 137 62 120"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      <path
        d="M103 138 C115 126 123 113 126 99"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      <path
        d="M238 181 C236 150 228 125 215 103"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      <path
        d="M228 161 C243 150 252 137 258 120"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      <path
        d="M217 138 C205 126 197 113 194 99"
        fill="none"
        stroke="#7b9270"
        strokeWidth="3"
      />

      {/* baby's breath flowers */}
      <g
        fill="#fffaf0"
        stroke="#91a39a"
        strokeWidth="2"
      >
        <circle cx="63" cy="119" r="6" />
        <circle cx="76" cy="137" r="5" />
        <circle cx="86" cy="112" r="6" />
        <circle cx="98" cy="101" r="5" />
        <circle cx="108" cy="123" r="6" />
        <circle cx="115" cy="94" r="5" />
        <circle cx="73" cy="154" r="5" />
        <circle cx="91" cy="150" r="5" />

        <circle cx="257" cy="119" r="6" />
        <circle cx="244" cy="137" r="5" />
        <circle cx="234" cy="112" r="6" />
        <circle cx="222" cy="101" r="5" />
        <circle cx="212" cy="123" r="6" />
        <circle cx="205" cy="94" r="5" />
        <circle cx="247" cy="154" r="5" />
        <circle cx="229" cy="150" r="5" />
      </g>

      {/* SMALLER GERBERA FLOWERS */}

      {/* back left */}
      <g transform="translate(86 78) scale(0.45)">
        <Flower />
      </g>

      {/* back right */}
      <g transform="translate(145 65) scale(0.52)">
        <Flower />
      </g>

      {/* main left */}
      <g transform="translate(40 110) scale(0.64)">
        <Flower />
      </g>

      {/* main right */}
      <g transform="translate(132 104) scale(0.67)">
        <Flower />
      </g>

      {/* lower flower */}
      <g transform="translate(91 142) scale(0.59)">
        <Flower />
      </g>

      {/* EXTRA WHITE FLOWERS */}
      <g
        fill="#fffaf0"
        stroke="#173b56"
        strokeWidth="3"
      >
        <path
          d="
            M158 132
            C163 124 171 126 174 133
            C182 129 187 135 183 142
            C188 148 182 154 175 151
            C170 158 162 155 162 148
            C154 147 152 139 158 132
          "
        />

        <path
          d="
            M133 153
            C138 145 146 147 149 154
            C157 150 162 156 158 163
            C163 169 157 175 150 172
            C145 179 137 176 137 169
            C129 168 127 160 133 153
          "
        />
      </g>

      <circle
        cx="169"
        cy="141"
        r="5"
        fill="#d6b46a"
      />

      <circle
        cx="144"
        cy="162"
        r="5"
        fill="#d6b46a"
      />

      {/* STEMS */}
      <path
        d="M160 152 C158 190 158 220 160 250"
        fill="none"
        stroke="#4d7656"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M125 167 C137 201 148 225 160 250"
        fill="none"
        stroke="#4d7656"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M195 167 C183 201 172 225 160 250"
        fill="none"
        stroke="#4d7656"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* EXTRA GREEN LEAVES */}
      <path
        d="
          M137 213
          Q109 205 100 183
          Q128 187 146 205
          Z
        "
        fill="#7f9c76"
        stroke="#173b56"
        strokeWidth="4"
      />

      <path
        d="
          M183 213
          Q211 205 220 183
          Q192 187 174 205
          Z
        "
        fill="#7f9c76"
        stroke="#173b56"
        strokeWidth="4"
      />

      <path
        d="
          M150 224
          Q128 216 120 198
          Q145 203 155 216
          Z
        "
        fill="#9bb18c"
        stroke="#173b56"
        strokeWidth="4"
      />

      <path
        d="
          M170 224
          Q192 216 200 198
          Q175 203 165 216
          Z
        "
        fill="#9bb18c"
        stroke="#173b56"
        strokeWidth="4"
      />

      {/* BLUE WRAPPING PAPER */}

      {/* main blue wrapping */}
      <path
        d="
          M58 190
          L160 228
          L262 190
          L218 300
          L160 334
          L102 300
          Z
        "
        fill="#6f94b2"
        stroke="#173b56"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* pale blue left fold */}
      <path
        d="
          M58 190
          L160 228
          L115 306
          L84 280
          Z
        "
        fill="#d9e8ed"
        stroke="#173b56"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* pale blue right fold */}
      <path
        d="
          M262 190
          L160 228
          L205 306
          L236 280
          Z
        "
        fill="#c7dfe7"
        stroke="#173b56"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* center fold */}
      <path
        d="
          M160 228
          L160 334
          L218 300
          Z
        "
        fill="#bcd5df"
      />

      {/* paper highlight */}
      <path
        d="
          M76 199
          Q118 216 160 228
          Q202 216 244 199
        "
        fill="none"
        stroke="#eef7f8"
        strokeWidth="5"
        opacity="0.9"
      />

      {/* paper creases */}
      <path
        d="
          M103 211
          Q117 255 106 295
        "
        fill="none"
        stroke="#b8d1dc"
        strokeWidth="4"
      />

      <path
        d="
          M217 211
          Q203 255 214 295
        "
        fill="none"
        stroke="#a9c7d4"
        strokeWidth="4"
      />

      {/* DUSTY BLUSH RIBBON */}
      <path
        d="
          M105 225
          Q160 241 215 225
        "
        fill="none"
        stroke="#d6a0ac"
        strokeWidth="14"
        strokeLinecap="round"
      />

      <path
        d="
          M110 222
          Q160 236 210 222
        "
        fill="none"
        stroke="#efd0d5"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* RIBBON BOW */}

      {/* left loop */}
      <path
        d="
          M160 230
          C141 207 108 212 116 232
          C122 248 147 243 160 233
          Z
        "
        fill="#d6a0ac"
        stroke="#173b56"
        strokeWidth="5"
      />

      {/* right loop */}
      <path
        d="
          M160 230
          C179 207 212 212 204 232
          C198 248 173 243 160 233
          Z
        "
        fill="#d6a0ac"
        stroke="#173b56"
        strokeWidth="5"
      />

      {/* left ribbon tail */}
      <path
        d="
          M153 235
          L119 304
          L149 285
          L157 320
          L165 240
          Z
        "
        fill="#dfadb8"
        stroke="#173b56"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* right ribbon tail */}
      <path
        d="
          M167 235
          L201 304
          L171 285
          L163 320
          L155 240
          Z
        "
        fill="#c9929f"
        stroke="#173b56"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* ribbon center */}
      <circle
        cx="160"
        cy="231"
        r="9"
        fill="#e5b7c0"
        stroke="#173b56"
        strokeWidth="4"
      />
    </svg>
  );
}

/* =====================================================
   GERBERA FLOWER
   Smaller + muted blush theme
===================================================== */

function Flower() {
  return (
    <g>
      {/* outer petals */}
      <g
        fill="#d9a3ad"
        stroke="#173b56"
        strokeWidth="4"
        strokeLinejoin="round"
      >
        <ellipse cx="0" cy="-43" rx="11" ry="31" />
        <ellipse cx="0" cy="43" rx="11" ry="31" />
        <ellipse cx="-43" cy="0" rx="31" ry="11" />
        <ellipse cx="43" cy="0" rx="31" ry="11" />

        <ellipse
          cx="-30"
          cy="-30"
          rx="11"
          ry="31"
          transform="rotate(-45 -30 -30)"
        />

        <ellipse
          cx="30"
          cy="-30"
          rx="11"
          ry="31"
          transform="rotate(45 30 -30)"
        />

        <ellipse
          cx="-30"
          cy="30"
          rx="11"
          ry="31"
          transform="rotate(45 -30 30)"
        />

        <ellipse
          cx="30"
          cy="30"
          rx="11"
          ry="31"
          transform="rotate(-45 30 30)"
        />
      </g>

      {/* soft inner petals */}
      <g
        fill="#efd0d5"
        opacity="0.95"
      >
        <ellipse cx="0" cy="-28" rx="7" ry="22" />
        <ellipse cx="0" cy="28" rx="7" ry="22" />
        <ellipse cx="-28" cy="0" rx="22" ry="7" />
        <ellipse cx="28" cy="0" rx="22" ry="7" />
      </g>

      {/* flower center */}
      <circle
        cx="0"
        cy="0"
        r="18"
        fill="#6b4a45"
        stroke="#173b56"
        strokeWidth="4"
      />

      {/* center details */}
      <g fill="#45302d">
        <circle cx="-7" cy="-6" r="2.5" />
        <circle cx="2" cy="-8" r="2.5" />
        <circle cx="9" cy="-3" r="2.5" />
        <circle cx="-9" cy="3" r="2.5" />
        <circle cx="0" cy="1" r="2.5" />
        <circle cx="8" cy="6" r="2.5" />
        <circle cx="-3" cy="9" r="2.5" />
      </g>
    </g>
  );
}

function Sparkle({ className }) {
  return (
    <span className={`surprise-sparkle ${className}`}>
      ✦
    </span>
  );
}

function Surprises({
  onBack,
  onOpenPhotos,
  onOpenBubbleGame,
  onOpenAward,
  onOpenEnvelope,
  onFinish
}) {
  return (
    <section className="surprises-page">
      <div className="surprises-paper">

        {/* back button */}
        <button
          className="surprises-back-button"
          onClick={onBack}
          type="button"
          aria-label="Go back to cover"
        >
          ← back
        </button>

        {/* tape */}
        <div className="paper-tape tape-one"></div>
        <div className="paper-tape tape-two"></div>

        {/* tiny handwritten note */}
        <div className="surprise-note">
          just a little note for you...
        </div>

        {/* heading */}
        <h1 className="surprise-heading">
          <span>Sur</span>prises
          <b>♡</b>
        </h1>

        <div className="heading-swoosh"></div>

        <p className="surprise-subtitle">
          small things, big happiness
        </p>

        {/* stickers */}
        <div className="surprise-sticker-area">

          {/* camera */}
          <button
            className="sticker-object sticker-camera"
            onClick={onOpenPhotos}
            aria-label="Open photos"
          >
            <CameraSticker />
          </button>

          {/* console */}
          <button
            className="sticker-object sticker-console"
            onClick={onOpenBubbleGame}
            aria-label="Open bubble game"
          >
            <ConsoleSticker />
          </button>

          {/* envelope */}
          <button
            className="sticker-object sticker-envelope"
            onClick={onOpenEnvelope}
            aria-label="Open songs that remind me of you"
          >
            <EnvelopeSticker />
          </button>

          {/* bouquet */}
          <button
            className="sticker-object sticker-bouquet"
            onClick={onOpenAward}
            aria-label="Open your special bouquet"
          >
            <BouquetSticker />
          </button>

          {/* decorative sparkles */}
          <Sparkle className="sparkle-a" />
          <Sparkle className="sparkle-b" />
          <Sparkle className="sparkle-c" />
          <Sparkle className="sparkle-d" />

          <span className="tiny-heart heart-a">
            ♡
          </span>

          <span className="tiny-heart heart-b">
            ♡
          </span>
        </div>

        {/* final transition */}
        <button
          className="special-wish-button"
          onClick={onFinish}
          type="button"
        >
          My Special Wish ♡
          <span>→</span>
        </button>

        <div className="bottom-note">
          made especially for you
        </div>

      </div>
    </section>
  );
}

export default Surprises;