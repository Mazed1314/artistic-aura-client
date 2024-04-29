import CategorySection from "../CategorySection";
import CraftItemSection from "../CraftItemSection";
import ModernArtSection from "../ModernArtSection";
import PopulerArtSection from "../PopulerArtSection";
import Slide from "../Slide";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h2 className="p-4 py-8 md:w-2/3 mx-auto text-center md:text-start text-3xl md:text-5xl font-light">
            Being creative is not a hobby, it is a way of life for every artist
          </h2>
        </div>
        {/* Banner section */}
        <Slide></Slide>
      </div>
      <div className="">
        {/* Craft items section */}
        <div className="flex justify-center my-8">
          <span className="pt-1 pb-2 px-2 text-pink-800 bg-transparent text-3xl md:text-5xl font-semibold">
            Crafts
          </span>
        </div>
        <CraftItemSection></CraftItemSection>
      </div>
      <div>
        {/* Art & Craft Categories Section */}
        <div className="flex justify-center my-8">
          <span className="pt-1 pb-3 px-2 text-pink-800 bg-transparent border-y-4 border-pink-800 text-xl md:text-3xl font-semibold">
            Categories
          </span>
        </div>
        <div className="md:border-4 p-1 border-pink-800">
          <div className="md:border-4 p-2 border-pink-800">
            <CategorySection></CategorySection>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-end my-8">
          <span className="py-2  rounded-s-3xl px-4 text-white bg-pink-800 border-l-rounded text-xl md:text-3xl font-semibold">
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
