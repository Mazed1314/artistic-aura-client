import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {getCraft.map((craft) => (
        <>
          <Craft key={craft._id} craft={craft}></Craft>
        </>
      ))}
    </div>
  );
};

export default CraftItemSection;
