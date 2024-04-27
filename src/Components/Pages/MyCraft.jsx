import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyCraftCard from "../MyCraftCard";

const MyCraft = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {item < 1 ? (
        <h2>You have no Craft Now</h2>
      ) : (
        <>
          {item?.map((craft) => (
            <>
              <MyCraftCard craft={craft}></MyCraftCard>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default MyCraft;
