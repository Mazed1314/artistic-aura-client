import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import { GiPriceTag } from "react-icons/gi";

const CategoryCard = ({ craft }) => {
  const {
    _id,
    item_name,
    short_description,
    subcategory_name,
    processing_time,
    stock_status,
    price,
    photo,
  } = craft;

  return (
    <div>
      <div className="w-full h-full rounded font-sans border border-pink-800">
        {/* Post image */}
        <div className="w-full">
          <img src={photo} className="w-full h-60" alt="Craft Image" />
        </div>

        {/* Post content */}
        <div className="mt-3 space-y-2 px-4">
          <h2 className="text-xl font-semibold">{item_name}</h2>
          <div className="flex justify-between px-2">
            <div className="flex">
              <GiPriceTag className="text-4xl pb-2 text-amber-400" />
              <span className="text-xl pl-2">{price} $</span>
            </div>
            <h2 className=" mb-2 font-bold border rounded-full text-pink-800 px-2 border-pink-800 pb-0">
              {stock_status}
            </h2>
          </div>
          <h2>
            <span className="font-semibold">Processing Time</span> :{" "}
            <span className="text-slate-600 font-medium">
              {processing_time}
            </span>
            h
          </h2>
          <h2 className="text-md py-2 text-slate-600">
            {short_description.slice(0, 150)}
            {"... "}
          </h2>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={`details/${_id}`}
            className="btn mb-3 btn-sm rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  craft: PropTypes.object,
};

export default CategoryCard;
