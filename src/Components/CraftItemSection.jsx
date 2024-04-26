import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const CraftItemSection = () => {
  const getCraft = useLoaderData();
  return (
    <div className="flex flex-grow gap-4">
      {getCraft.map((craft) => (
        <>
          <Craft key={craft._id} craft={craft}></Craft>
        </>
      ))}
    </div>
  );
};

export default CraftItemSection;
