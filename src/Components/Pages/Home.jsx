import { Helmet } from "react-helmet";
import CategorySection from "../CategorySection";
import CraftItemSection from "../CraftItemSection";
import ModernArtSection from "../ModernArtSection";
import PopulerArtSection from "../PopulerArtSection";
import Slide from "../Slide";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Hobby", "Passion", "Pursuit"],
    loop: {},
    typeSpeed: 280,
    delaySpeed: 80,
  });
  return (
    <div>
      <Helmet>
        <title>Artistic Aura </title>
      </Helmet>
      <div className="">
        <div className="">
          <h2 className="p-4 py-8 md:w-2/3 mx-auto text-center md:text-start text-3xl md:text-5xl font-light">
            Being creative <br />
            is not just a{" "}
            <span className="text-pink-700 font-medium text-5xl">{text}</span>
            <span>
              <Cursor></Cursor>
            </span>
            ,<br /> it is a way of life for every artist
          </h2>
        </div>
        {/* Banner section */}
        <Slide></Slide>
      </div>
      <div className="">
        {/* Craft items section */}
        <div className="flex justify-center my-8">
          <span className="pt-10 pb-6 px-2 text-pink-800 bg-transparent text-5xl md:text-[100px] font-light">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full justify-around my-12 py-12">
        <h2 className="text-xl text-center md:text-5xl ">
          Sign Up For Latest News
        </h2>
        <label className="pl-4 border border-gray-400  flex items-center gap-2">
          <input
            type="text"
            className="grow py-2"
            placeholder="Your email address"
          />
          <span className="badge bg-transparent text-gray-400 btn btn-sm badge-info ml-2">
            Sign Up
            <IoIosArrowRoundForward className="text-2xl" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Home;
