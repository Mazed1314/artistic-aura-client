import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  const bg_img =
    "/images/f_25-x-25-cm-mingxuan-du-f3-no-name-110-20717-20220615-9-front-0.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
      className="bg-no-repeat bg-cover min-h-screen p-2"
    >
      <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-2 py-8 md:py-20">
        {getCraft.map((craft) => (
          <>
            <Craft key={craft._id} craft={craft}></Craft>
          </>
        ))}
      </div>
    </div>
  );
};

export default CraftItemSection;
