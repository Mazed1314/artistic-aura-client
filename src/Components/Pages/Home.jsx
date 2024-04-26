import CraftItemSection from "../CraftItemSection";
import PopulerArtSection from "../PopulerArtSection";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h2 className="text-center text-4xl font-semibold">
            Being creative is not a hobby, it is a way of life for every artist
          </h2>
        </div>
        Banner section
      </div>
      <div className="">
        Craft items section
        {/* <CraftItemSection></CraftItemSection> */}
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
      <div className="">Extra Sections 2</div>
    </div>
  );
};

export default Home;
