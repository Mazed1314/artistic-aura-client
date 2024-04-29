import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  const bg_img =
    "/images/Pink-White-And-Purple-Swirls-Oil-Painting-55284785-1.png";
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
      className="bg-no-repeat bg-cover min-h-screen p-2"
    >
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {getCraft.slice(0, 6).map((craft) => (
          <>
            <Craft key={craft._id} craft={craft}></Craft>
          </>
        ))}
      </div>
    </div>
  );
};

export default CraftItemSection;
