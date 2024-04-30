import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyCraftCard from "../MyCraftCard";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`https://artistic-aura-server.vercel.app/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>My Art & Craft</title>
      </Helmet>
      {item < 1 ? (
        <div className=" h-96 flex flex-col justify-center">
          <h2 className="text-center mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Oops
          </h2>
          <h2 className="text-center text-3xl">You have no Craft Now !</h2>
          <p className="mt-4 text-gray-500 text-center mb-2">For Add Craft</p>
          <div className="flex justify-center">
            <button
              className="bg-white btn btn-sm text-pink-800 border border-pink-800 px-2 rounded-lg"
              onClick={() => Navigate("/add-craft")}
            >
              Add Craft
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 my-6">
            {/* dropdown */}

            {item?.map((craft) => (
              <>
                <MyCraftCard craft={craft}></MyCraftCard>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCraft;
