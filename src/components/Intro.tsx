import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.js";
import seal from "../assets/seal.png";
import "./intro.css";

const BASE_ANIMATION_TIMING = 2000;
const BASE_ANIMATION_DELAY = 4000;

const Intro = ({ guest }: { guest: string | null }) => {
  const guestName = guest ? guest.charAt(0).toUpperCase() + guest.slice(1) : "";

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  // Define common animation settings for both left and right divs
  const animateDiv = (ref: any, translateX: string, delay: number) => {
    anime({
      targets: ref.current,
      translateX: translateX,
      delay: delay,
      duration: BASE_ANIMATION_TIMING,
      easing: "easeInOutSine",
    });
  };

  // Handle animation logic in useEffect to ensure it runs after the component mounts
  useEffect(() => {
    if (leftRef.current && rightRef.current && textRef.current) {
      animateDiv(leftRef, "-2000px", BASE_ANIMATION_DELAY * 0.9);
      animateDiv(rightRef, "2000px", BASE_ANIMATION_DELAY);
      anime({
        targets: textRef.current,
        delay: BASE_ANIMATION_DELAY * 0.6,
        opacity: 0,
        duration: BASE_ANIMATION_TIMING,
        easing: "easeInOutSine",
      });
    }
    return () => {
      // Remove ongoing animations when the component unmounts
      anime.remove(leftRef.current);
      anime.remove(rightRef.current);
      anime.remove(textRef.current);
    };
  }, []);

  return (
    <div className="intro-container overflow-hidden" style={{ zIndex: 1000 }}>
      <div ref={leftRef} style={{ transform: "translateX(0)" }} />
      <div ref={rightRef} style={{ transform: "translateX(0)" }} />
      <span
        ref={textRef}
        style={{
          zIndex: 2,
          position: "absolute",
          opacity: 1,
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
