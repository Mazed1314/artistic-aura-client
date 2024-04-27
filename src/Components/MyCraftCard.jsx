import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { GiPriceTag, GiTrashCan } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";

const MyCraftCard = ({ craft }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    item_name,
    short_description,
    subcategory_name,
    processing_time,
    stock_status,
    price,
  } = craft;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your craft has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="mx-auto my-6 md:w-[350px] md:h-[500px] rounded-lgfont-sans border">
        <div className="flex justify-between py-4 px-2">
          <div className="flex">
            {/* Avatar image  */}
            <img
              className="h-14 w-14 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <div className="flex flex-col pl-2">
              <h2 className="text-xl font-semibold">{user.displayName}'s</h2>
              <h2>
                <span className="text-lg text-slate-600 font-medium">
                  {subcategory_name}
                </span>{" "}
                creation
              </h2>
            </div>
          </div>
          <div className="flex cursor-pointer gap-2 rounded-full px-4 py-3">
            <span className="">
              <FaRegEdit className="bg-transparent text-3xl text-sky-500" />
            </span>
            <span
              onClick={() => handleDelete(_id)}
              className="bg-transparent border-0"
            >
              <GiTrashCan className="bg-transparent text-3xl text-rose-600" />
            </span>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div className="flex">
            <GiPriceTag className="text-4xl pb-2 text-amber-400" />
            <span className="text-xl pl-2">{price} $</span>
          </div>
          <h2>{stock_status}</h2>
        </div>

        {/* Post image */}
        <div className="w-full">
          <img
            width={400}
            height={200}
            src="https://source.unsplash.com/400x200/?arts"
            alt=""
          />
        </div>

        {/* Post content */}
        <div className="mt-3 space-y-2 px-4">
          <h2 className="text-xl font-semibold">{item_name}</h2>
          <h2>Processing Time : {processing_time}h</h2>
          <h2 className="text-sm">
            {short_description.slice(0, 20)}
            {"... "}
          </h2>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={`/view-details/${_id}`}
            className="btn btn-sm rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

MyCraftCard.propTypes = {
  craft: PropTypes.object,
};

export default MyCraftCard;
