import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  console.log(getCraft);
  const bg_img = "/images/pawel-czerwinski-qztBRIrU1FM-unsplash.jpg";
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
