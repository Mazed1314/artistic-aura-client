import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Craft = ({ craft }) => {
  const { _id, item_name, photo, short_description } = craft;
  return (
    <div className="">
      <div className="rounded border h-full glass">
        <figure>
          <img src={photo} alt="image" className="w-full h-[200px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description.slice(0, 100)}...</p>
          <div className="card-actions justify-center">
            <NavLink
              to={`/view-details/${_id}`}
              className="btn btn-sm mt-2 rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Craft.propTypes = {
  craft: PropTypes.object,
};

export default Craft;
