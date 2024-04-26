import CraftItemSection from "../CraftItemSection";
import ModernArtSection from "../ModernArtSection";
import PopulerArtSection from "../PopulerArtSection";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h2 className="p-4 py-8 md:w-1/2 mx-auto  text-5xl font-light">
            Being creative is not a hobby, it is a way of life for every artist
          </h2>
        </div>
        Banner section
      </div>
      <div className="">
        {/* Craft items section */}
        <CraftItemSection></CraftItemSection>
      </div>
      <div className="">Art & Craft Categories Section</div>
      <div className="">
        <div className="flex justify-end my-8">
          <span className="py-2 rounded-s-3xl px-4 text-white bg-pink-800 border-l-rounded text-xl md:text-3xl font-semibold">
            Populer This week
          </span>
        </div>
        <PopulerArtSection></PopulerArtSection>
      </div>
      <div className="">
        <div className="flex justify-start my-8">
          <span className="py-2 rounded-e-3xl px-4 text-white bg-pink-800 border-l-rounded text-xl md:text-3xl font-semibold">
            Modern Art
          </span>
        </div>
        <ModernArtSection></ModernArtSection>
      </div>
    </div>
  );
};

export default Home;
