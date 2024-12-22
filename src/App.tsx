import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.js";
import hero from "./assets/hero.png";
import heroMobile from "./assets/hero-mobile.png";
import flowerBanner from "./assets/flower-banner.png";
import video from "./assets/venue-shots.mp4";
import Section from "./components/Section";

const App = () => {
  const [shouldNavAnimate, setShouldNavAnimate] = useState(true);
  const navRef = useRef(null);

  const isNotMobile = window.innerWidth > 800;

  useEffect(() => {
    if (navRef.current === null) return;
    const navAnimation = anime({
      targets: navRef.current,
      easing: "cubicBezier(0.2, 0, 0, 1)",
      translateY: window.innerHeight - 80,
      duration: 400,
      delay: function (el, i) {
        return i * 100;
      },
      autoplay: false,
    });

    const handleScroll = () => {
      if (
        ((isNotMobile && window.scrollY > window.innerHeight) ||
          (!isNotMobile && window.scrollY > window.innerHeight / 2)) &&
        shouldNavAnimate
      ) {
        navAnimation.play();
        setShouldNavAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef.current]);
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center">
        <img
          src={flowerBanner}
          alt="flower-banner"
          className="w-[90%] mb-2 absolute z-20"
          style={{ transform: "translateY(-20%)" }}
        />
        <img
          src={flowerBanner}
          alt="flower-banner"
          className="w-[80%] absolute z-20 top-[42%] left-[54%]"
          style={{ transform: "rotate(90deg)" }}
        />
        <img
          src={flowerBanner}
          alt="flower-banner"
          className="w-[80%] absolute z-20 top-[42%] right-[54%]"
          style={{ transform: "rotate(270deg)" }}
        />

        {!isNotMobile ? (
          <>
            <img
              src={flowerBanner}
              alt="flower-banner"
              className="w-[80%] absolute z-20 top-[12%] left-[54%]"
              style={{ transform: "rotate(90deg)" }}
            />
            <img
              src={flowerBanner}
              alt="flower-banner"
              className="w-[80%] absolute z-20 top-[12%] right-[54%]"
              style={{ transform: "rotate(270deg)" }}
            />
          </>
        ) : null}
        <section
          className="w-full"
          id="home"
          style={{
            height: isNotMobile ? window.innerHeight : window.innerHeight / 1.6,
          }}
        />
        <img
          src={isNotMobile ? hero : heroMobile}
          alt="hero"
          className="md:h-screen md:w-[1240px] fixed -z-10"
        />
        <nav
          className=" flex justify-between items-center w-full md:w-[800px] fixed h-12 mt-8 z-10 text-white rounded-t p-4"
          style={{
            background: "#818763",
            opacity: 0.8,
            transform: "translateY(-100px)",
          }}
          ref={navRef}
        >
          <a href="#home">Home</a>
          <a href="#rsvp">RSVP</a>
          <a href="#venue">Venue</a>
          <a href="#travel">Travel</a>
          <a href="#wedding-day">Wedding Day</a>
        </nav>
        <Section backgroundColour="#818763" id="home">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">Heidi Freeman</h1>
            <h1 className="text-3xl">and</h1>
            <h1 className="text-5xl">Joe Milne</h1>
            <p className="my-4">
              Please join us for our wedding celebration on
            </p>
            <p className="text-xl mb-8 font-bold">10 September, 2025</p>
          </div>
        </Section>
        <Section backgroundColour="white" id="rsvp">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">RSVP</h1>
            <p className="my-4">Please RSVP by 1st August 2025</p>
            <form className="flex flex-col w-[700px]">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="attending">Attending</label>
              <select id="attending">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label htmlFor="dietary-requirements">Dietary Requirements</label>
              <input type="text" id="dietary-requirements" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Section>
        <section
          className="h-screen w-full relative overflow-hidden"
          style={{
            color: "white",
          }}
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
            }}
          />
        </section>
        <Section backgroundColour="white" id="travel">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-8">Travel</h1>
            <p className="text-xl font-bold">South Farm Royston</p>
            <p className="my-4">SG8 0HR</p>
            <p className="my-4">
              Royston Station 12 Mins Drive, Cambridge Station 26 Mins Drive,
              Local Taxi's (Royston Taxis, Butlermeltax, Breeze Taxi's)
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95751.55330690488!2d-0.04342107034763032!3d52.13533638051545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877d513550fb831%3A0xc59912fbe908b2c2!2sSouth%20Farm!5e0!3m2!1sen!2suk!4v1734875817837!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{border: '0'}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Section>
        <Section backgroundColour="#818763" id="wedding-day">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">Wedding Day</h1>
            <p className="my-4">The wedding will take place at 2pm</p>
            <p className="text-xl mb-8 font-bold">10 September, 2025</p>
          </div>
        </Section>
        <section className="h-screen w-full" />
      </div>
    </main>
  );
};

export default App;
