import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
    <div>
      <h2>MY art & craft list</h2>
      {item?.map((craft) => (
        <>
          <div>
            <h1>Hello</h1>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyCraft;
