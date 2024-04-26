import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Craft from "../Craft";
import MyCraftCard from "../MyCraftCard";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`https://artistic-aura-server.vercel.app/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div className="flex flex-grow gap-4 justify-center">
      {item < 1 ? (
        <h2>You have no Craft Now</h2>
      ) : (
        <>
          {item?.map((craft) => (
            <>
              <MyCraftCard craft={craft}></MyCraftCard>
            </>
          ))}
          ;
        </>
      )}

      {/* {(() => {
        if (item < 1) {
          return <h2>MY art & craft list</h2>;
        } else {
          return (
            <>
              {item?.map((craft) => (
                <>
                  <Craft craft={craft}></Craft>
                </>
              ))}
              ;
            </>
          );
        }
      })()} */}
    </div>
  );
};

export default MyCraft;
