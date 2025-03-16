import anime from "animejs/lib/anime.js";
import seal from "../assets/seal.png";

import "./intro.css";

const BASE_ANIMATION_TIMING = 2000;
const BASE_ANIMATION_DELAY = 4000;

const Intro = ({ guest }: { guest: string | null }) => {
  const guestName = guest
    ? guest?.charAt(0).toUpperCase() + guest?.slice(1)
    : "";
  return (
    <div className="intro-container" style={{ zIndex: 1000 }}>
      <div
        style={{ transform: "translateX(0)" }}
        ref={(ref) =>
          anime({
            targets: ref,
            translateX: "-2000px",
            delay: BASE_ANIMATION_DELAY * 0.9,
            duration: BASE_ANIMATION_TIMING,
            easing: "easeInOutSine",
          })
        }
      />
      <div
        style={{ transform: "translateX(0)" }}
        ref={(ref) =>
          anime({
            targets: ref,
            translateX: "2000px",
            delay: BASE_ANIMATION_DELAY,
            duration: BASE_ANIMATION_TIMING,
            easing: "easeInOutSine",
          })
        }
      />
      <span
        style={{
          zIndex: 2,
          position: "absolute",
          opacity: 1,
          scale: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "1rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "300px",
          color: "white",
          fontSize: "30px",
        }}
        ref={(ref) => {
          anime({
            targets: ref,
            delay: BASE_ANIMATION_DELAY * 0.6,
            opacity: 0,
            duration: BASE_ANIMATION_TIMING,
            easing: "easeInOutSine",
          });
        }}
      >
        <img src={seal} width={150} className="mb-4" />

        <span className="font-medium mb-4">{`Dearest ${guestName},`}</span>
        <span className="text-center text-lg">
          You are cordially invited to our wedding!
        </span>
      </span>
    </div>
  );
};

export default Intro;
