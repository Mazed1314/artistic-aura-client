import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg')",
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2 bg-cover bg-center min-h-screen bg-orange-300"
    >
      {getCraft.map((craft) => (
        <>
          <Craft key={craft._id} craft={craft}></Craft>
        </>
      ))}
    </div>
  );
};

export default CraftItemSection;
