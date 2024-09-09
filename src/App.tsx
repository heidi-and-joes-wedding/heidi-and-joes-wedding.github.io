import hero from "./assets/hero.jpg";
import flowerBanner from "./assets/flower-banner.png";

const App = () => {
  return (
    <main>
      <div className="flex flex-col items-center">
      <img src={flowerBanner} alt="flower-banner" className="w-9/12 mb-2" />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl">Heidi Freeman</h1>
          <h1 className="text-3xl">and</h1>
          <h1 className="text-5xl">Joe Milne</h1>
        </div>
        <div className="flex w-[700px] justify-between mt-8">
          <a href="#home">Home</a>
          <a href="#rsvp">RSVP</a>
          <a href="#photos">Photos</a>
          <a href="#venue">Venue</a>
          <a href="#travel">Travel</a>
          <a href="#wedding-day">Wedding Day</a>
        </div>
        <img src={hero} alt="hero" className="w-[1240px] m-8" />
        <p className="my-4">Please join us for our wedding celebration on</p>
        <p className="text-xl mb-8 font-bold">10 September, 2025</p>
      </div>
    </main>
  );
};

export default App;
