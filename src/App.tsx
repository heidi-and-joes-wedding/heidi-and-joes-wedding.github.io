import { FormEvent, useEffect, useState } from "react";
//import anime from "animejs/lib/anime.js";
import hero from "./assets/hero.png";
import heroMobile from "./assets/hero-mobile.png";
import flowerBanner from "./assets/flower-banner.png";
import timlineMobile from "./assets/timeline-mobile.jpeg";
import timeline from "./assets/timeline-desktop.jpeg";
import image1 from "./assets/us/1.jpeg";
import image2 from "./assets/us/2.jpeg";
import image3 from "./assets/us/3.jpeg";
import image4 from "./assets/us/4.jpeg";
import image5 from "./assets/us/5.jpeg";
import image6 from "./assets/us/6.jpeg";
import video from "./assets/venue-shots.mp4";
import Section from "./components/Section";

function getCountdown(targetDate: string) {
  const now = new Date();
  const target = new Date(targetDate);

  let months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());
  if (target.getDate() < now.getDate()) {
    months -= 1;
  }
  const futureDate = new Date(now);
  futureDate.setMonth(now.getMonth() + months);
  const days = Math.floor(
    ((target as unknown as number) - (futureDate as unknown as number)) /
      (1000 * 60 * 60 * 24)
  );

  return { months, days };
}

const App = () => {
  //const [shouldNavAnimate, setShouldNavAnimate] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(
    localStorage.getItem("submitted") === "true"
  );
  const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 800);
  const countdown = getCountdown("2025-09-10");

  useEffect(() => {
    // const navAnimation = anime({
    //   targets: navRef.current,
    //   easing: "cubicBezier(0.2, 0, 0, 1)",
    //   translateY: window.innerHeight - 80,
    //   duration: 400,
    //   delay: function (_el, i) {
    //     return i * 100;
    //   },
    //   autoplay: false,
    // });

    // const handleScroll = () => {
    //   if (
    //     ((isNotMobile && window.scrollY > window.innerHeight) ||
    //       (!isNotMobile && window.scrollY > window.innerHeight / 2)) &&
    //     shouldNavAnimate
    //   ) {
    //     navAnimation.play();
    //     setShouldNavAnimate(false);
    //   }
    // };

    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsNotMobile(true);
      }
      if (window.innerWidth < 800) {
        setIsNotMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    //window.addEventListener("scroll", handleScroll);

    return () => {
      //window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!e.target) return;
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwlWpzbVS_-wDiRUGYdkgswwzOgf0URLbjbl5ok765HWdW7zvobKU9IxXUYKr2pJEC7/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      localStorage.setItem("submitted", "true");
      setHasSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      window.alert(
        "There was an error submitting your RSVP, sorry! Hit me up directly on Whatsapp"
      );
    }
  };

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
            height: isNotMobile ? window.innerHeight : window.innerHeight / 1.3,
          }}
        />
        <img
          src={isNotMobile ? hero : heroMobile}
          alt="hero"
          className="md:h-screen md:w-[1240px] fixed -z-10"
        />
        {/* <nav
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
        </nav> */}
        <Section backgroundColour="#818763" id="home">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold">Heidi Freeman</h1>
            <h1 className="text-xl md:text-3xl">and</h1>
            <h1 className="text-3xl md:text-5xl font-bold">Joe Milne</h1>
            <p className="my-4">
              Please join us for our wedding celebration on
            </p>
            <p className="text-xl font-bold mb-8">
              Wednesday 10th September, 2025
            </p>
            <div className="w-full relative overflow-hidden flex flex-wrap justify-center gap-4 mb-8">
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image6}
                  alt="wedding day timeline"
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image2}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                  alt="wedding day timeline"
                />
              </div>
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image3}
                  alt="wedding day timeline"
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image4}
                  alt="wedding day timeline"
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image5}
                  alt="wedding day timeline"
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] relative overflow-hidden rounded-full">
                <img
                  loading="lazy"
                  src={image1}
                  alt="wedding day timeline"
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
              <p className="text-xl mb-8">
                <span className="font-bold">{countdown.months}</span> months and{" "}
                <span className="font-bold">{countdown.days}</span> days.
              </p>
          </div>
        </Section>
        <Section backgroundColour="white" id="rsvp">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold">RSVP</h1>
            <p className="my-4">Please RSVP by 1st August 2025</p>

            {!hasSubmitted ? (
              <form
                className="flex flex-col w-full md:w-[700px] px-4 mt-12"
                onSubmit={onSubmit}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border-2 rounded mb-4"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border-2 rounded mb-4"
                />
                <label htmlFor="attending">Attending</label>
                <select
                  id="attending"
                  name="attendence"
                  required
                  className="border-2 rounded mb-4"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label htmlFor="dietary-requirements">
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  id="dietary-requirements"
                  name="dietary"
                  placeholder="eg. Gluten free, Vegan"
                  className="border-2 rounded mb-4"
                />
                <button
                  type="submit"
                  className="border-2 rounded bg-slate-100 mt-8 h-10"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div>Thank you for submitting your RSVP</div>
            )}
          </div>
        </Section>
        <section
          className="h-screen w-full relative overflow-hidden"
          style={{
            color: "white",
          }}
          id="venue"
        >
          <div className="relative z-10 flex flex-col items-center pt-12 opacity-60">
            <h1 className="text-3xl md:text-5xl font-bold">Venue</h1>
          </div>
          <video
            src={video}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
            }}
          ></video>
        </section>
        <Section backgroundColour="white" id="wedding-day">
          <div className="flex flex-col items-center m-4">
            <h1 className="text-3xl md:text-5xl font-bold">Wedding Day</h1>
            <p className="my-4">
              The wedding ceremony will take place at 3pm, so arrive from
              2:30pm.
            </p>
            <p className="text-xl mb-8 font-bold">
              Wednesday 10th September, 2025
            </p>
            <img
              loading="lazy"
              src={isNotMobile ? timeline : timlineMobile}
              alt="wedding day timeline"
            />
            <p>
              Unfortunately no children or pets will be able to attend unless
              expressly permitted.
            </p>
            <h2 className="text-2xl md:text-3xl mt-8">Dress code</h2>
            <p>Gentlemen will wear summer suits, neckwear optional.</p>
            <p>Ladies will wear summer dresses.</p>
          </div>
        </Section>
        <Section backgroundColour="#818763" id="travel">
          <div className="flex flex-col items-center m-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">Travel</h1>
            <p className="text-xl font-bold">South Farm Royston</p>
            <p className="my-4">SG8 0HR</p>
            <p className="my-4">
              Royston Station 12 Mins Drive, Cambridge Station 26 Mins Drive,
              Local Taxi's (Royston Taxis, Butlermeltax, Breeze Taxi's, Panther
              Taxis)
            </p>
            <p className="my-4">
              Should you choose to drive there is ample parking on site.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95751.55330690488!2d-0.04342107034763032!3d52.13533638051545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877d513550fb831%3A0xc59912fbe908b2c2!2sSouth%20Farm!5e0!3m2!1sen!2suk!4v1734875817837!5m2!1sen!2suk"
              style={{ border: "0" }}
              className="w-full h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="m-4">
              We have limited accomodation at the venue, so we recommend staying
              locally. Or in Royston or Cambridge.
            </p>
          </div>
        </Section>
        <section className="h-screen w-full" />
      </div>
      <span className="flex w-full justify-end">made by Jose Milneth</span>
    </main>
  );
};

export default App;
