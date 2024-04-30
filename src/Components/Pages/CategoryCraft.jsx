import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const CategoryCraft = () => {
  const [item, setItem] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://artistic-aura-server.vercel.app/categoryCraft/subcategory_name`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Category Craft</title>
      </Helmet>
      {item < 1 ? (
        <div className=" h-96 flex flex-col justify-center">
          <h2 className="text-center mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Sorry
          </h2>
          <h2 className="text-center text-3xl py-4">
            This category have no Craft in this time !
          </h2>

          <div className="flex justify-center py-4">
            <button
              className="bg-white btn btn-sm text-pink-800 border border-pink-800 px-2 rounded-lg"
              onClick={() => Navigate("/")}
            >
              Go Home
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 my-6">
            {/* dropdown */}

            {item?.map((craft) => (
              <>
                <CategoryCard craft={craft}></CategoryCard>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryCraft;
